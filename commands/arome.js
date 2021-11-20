const { getPrice } = require('../coins/AlphaRome')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Alpha Rome [aROME]',
            thumbnail: { url: 'https://miro.medium.com/fit/c/262/262/1*JzQzeGplczHbj9KpA6i3nQ.png'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
