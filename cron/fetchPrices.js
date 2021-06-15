const { PrismaClient } = require('@prisma/client')

const { getIronPrice, getTitanPrice } = require('../lib/getPrice')
const prisma = new PrismaClient()
const { client } = require('../common/discordClient')

const notifyChannel = async (titanPrice, latestTitanPrice) => {
    // channel notification

    if (titanPrice && latestTitanPrice) {
        // filter matching alerts
        let event = '🔴'
        let dir = '↓'
        let ratio = Math.abs((titanPrice / latestTitanPrice.price) * 100 - 100).toFixed(2)
        if (titanPrice > latestTitanPrice.price) {
            dir = '↑'
            event = '🟢'
        }
        const notfDiscordChannel = client.channels.cache.find(
            c => c.name === process.env.NOTIFICATIONS_CHANNEL,
        )
        notfDiscordChannel.send(`> ${event} **TITAN:** $${titanPrice} ( **${dir}** ${ratio}%)`)
    }
}

const notifySubscribers = async (titanPrice, latestTitanPrice) => {
    const operator = titanPrice > latestTitanPrice.price ? 'gt' : 'lt'
    const mathOps = { gt: '>', lt: '<' }
    const inverseMathOps = { gt: 'lt', lt: 'gt' }
    const matchingAlerts = await prisma.alert.findMany({
        where: {
            coin: 'titan',
            threshold: mathOps[operator],
            AND: [
                {
                    price: {
                        [operator]: latestTitanPrice.price,
                    },
                },
                {
                    price: {
                        [inverseMathOps[operator]]: titanPrice,
                    },
                },
            ],
        },
    })

    for (let a of matchingAlerts) {
        const user = await client.users.fetch(a.discordUser)

        let event = '🔴'
        let dir = '↓'
        let ratio = Math.abs((titanPrice / latestTitanPrice.price) * 100 - 100).toFixed(2)
        if (titanPrice > latestTitanPrice.price) {
            dir = '↑'
            event = '🟢'
        }

        await user.send({
            embed: {
                title: `${event} `,
                fields: [
                    {
                        name: 'Alert Threshold',
                        value: `Price ${a.threshold} $${a.price}`,
                    },
                    {
                        name: 'Current Price',
                        value: `**$${titanPrice} (${dir} ${ratio}%)**`,
                    },
                ],
            },
        })

        await prisma.alert.delete({
            where: {
                id: a.id,
            },
        })
    }
}

const worker = async () => {
    const titanPrice = await getTitanPrice()
    const ironPrice = await getIronPrice()
    const latestTitanPrice = await prisma.priceItem.findFirst({
        where: {
            coin: 'titan',
        },
        orderBy: {
            createdAt: 'desc',
        },
    })

    if (!latestTitanPrice) {
        await prisma.priceItem.create({
            data: {
                coin: 'titan',
                price: titanPrice,
            },
        })
    } else if (latestTitanPrice.price == titanPrice) {
        return console.log('price unchanged')
    } else {
        await prisma.priceItem.create({
            data: {
                coin: 'titan',
                price: titanPrice,
            },
        })
    }

    await notifyChannel(titanPrice, latestTitanPrice)
    await notifySubscribers(titanPrice, latestTitanPrice)
    console.log('latest price', latestTitanPrice.price)
    console.log('current price', titanPrice)
}

module.exports = {
    worker,
    notifySubscribers,
}
