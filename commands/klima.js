const { getPrice } = require('../coins/Klima')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Klima DAO (KLIMA)',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/18389/large/BSUSa5Gq_400x400.jpg'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
