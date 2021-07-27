const { getPrice } = require('../coins/Pup')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'PUP',
            thumbnail: { url: 'https://pup.polypup.finance/images/egg/9.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
