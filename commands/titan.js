const { getTitanPrice } = require('../lib/getPrice')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getTitanPrice()
    message.reply({
        embed: {
            title: 'TITAN',
            thumbnail: { url: 'https://polygon.iron.finance/static/media/TITAN.c8d93319.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
