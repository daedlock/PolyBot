const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const { client } = require('../common/discordClient')
const coins = require('../coins')

const notifyChannel = async (coin, currentPrice, latestPrice) => {
    // channel notification

    if (currentPrice && latestPrice) {
        // filter matching alerts
        let event = '🔴'
        let dir = '↓'
        let ratio = Math.abs((currentPrice / latestPrice.price) * 100 - 100).toFixed(2)
        if (currentPrice > latestPrice.price) {
            dir = '↑'
            event = '🟢'
        }
        const notfDiscordChannel = client.channels.cache.find(
            c => c.name === process.env.NOTIFICATIONS_CHANNEL,
        )
        notfDiscordChannel.send(
            `> ${event} **${coin.toUpperCase()}:** $${currentPrice} ( **${dir}** ${ratio}%)`,
        )
    }
}

const notifySubscribers = async (coin, currentPrice, previousPrice) => {
    console.log('notifiying subscribers:  ' + coin)
    const operator = currentPrice > previousPrice.price ? 'gt' : 'lt'
    const mathOps = { gt: '>', lt: '<' }
    const inverseMathOps = { gt: 'lte', lt: 'gte' }
    const matchingAlerts = await prisma.alert.findMany({
        where: {
            coin,
            threshold: mathOps[operator],
            AND: [
                {
                    price: {
                        [operator]: previousPrice.price,
                    },
                },
                {
                    price: {
                        [inverseMathOps[operator]]: currentPrice, //e for gte and lte
                    },
                },
            ],
        },
    })

    console.log('Found matching alerts: ' + matchingAlerts.length)

    for (let a of matchingAlerts) {
        const user = await client.users.fetch(a.discordUser)

        let event = '🔴'
        let dir = '↓'
        let ratio = Math.abs((currentPrice / previousPrice.price) * 100 - 100).toFixed(2)
        if (currentPrice > previousPrice.price) {
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
                        value: `**$${currentPrice} (${dir} ${ratio}%)**`,
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

// On every heartbeat, beat function runs and acts as the main poller for the whole bot
const beat = async () => {
    for (let [coinName, coin] of Object.entries(coins)) {
        console.log('Working on', coinName)
        const currentPrice = await coin.getPrice()
        const previousPrice = await prisma.priceItem.findFirst({
            where: {
                coin: coinName.toLowerCase(),
            },
            orderBy: {
                createdAt: 'desc',
            },
        })

        if (!previousPrice) {
            await prisma.priceItem.create({
                data: {
                    coin: coinName.toLowerCase(),
                    price: currentPrice,
                },
            })
        } else if (previousPrice.price == currentPrice) {
            console.log(`${coinName} price unchanged`)
            continue
        } else {
            await prisma.priceItem.create({
                data: {
                    coin: coinName.toLowerCase(),
                    price: currentPrice,
                },
            })
        }
        await notifyChannel(coinName.toLowerCase(), currentPrice, previousPrice)
        await notifySubscribers(coinName.toLowerCase(), currentPrice, previousPrice)
    }
    /*


    console.log('latest price', previousPrice.price)
    console.log('current price', currentPrice)*/
}

module.exports = {
    beat,
    notifySubscribers,
}
