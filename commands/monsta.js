const { getPrice } = require('../coins/Monsta')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Cake Monster (MONSTA)',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/16441/large/monster-head.png'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
