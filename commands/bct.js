    const { getPrice } = require('../coins/Bct')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: ' Toucan Protocol: Base Carbon Tonne (BCT)',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/19240/large/Logo_BCT.png'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
