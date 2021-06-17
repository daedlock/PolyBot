const { getPrice } = require('../coins/WexPoly')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'WexPoly',
            thumbnail: { url: 'https://wault.finance/wexpoly-token.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
