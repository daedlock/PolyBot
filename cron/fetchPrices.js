const { PrismaClient } = require('@prisma/client')

const { getIronPrice, getTitanPrice } = require('../lib/getPrice')
const prisma = new PrismaClient()
const { client } = require('../common/discordClient')

module.exports = async () => {
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

    console.log('latest price', latestTitanPrice.price)
    console.log('current price', titanPrice)
}
