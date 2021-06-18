const { getPrice } = require('../coins/Addy')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'ADDY',
            thumbnail: { url: 'https://gblobscdn.gitbook.com/spaces%2F-MZAoByXysH7h2hIdTZ5%2Favatar-1619413431280.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
