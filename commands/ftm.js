const { getPrice } = require('../coins/Ftm')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Fantom Opera',
            thumbnail: { url: 'https://avatars.githubusercontent.com/u/39045722?s=200&v=4' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })

}
