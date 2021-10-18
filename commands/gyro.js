const { getPrice } = require('../coins/Gyro')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'GYRO',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/19020/large/gyro.jpg'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
