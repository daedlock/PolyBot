const { getPrice } = require('../coins/Oasis')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Project Oasis (OASIS)',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/18755/large/pNOzYdY0_400x400.jpg'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
