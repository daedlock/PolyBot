const { getPrice } = require('../coins/Titan')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
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
