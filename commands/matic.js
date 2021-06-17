const { getPrice } = require('../coins/Matic')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'MATIC',
            thumbnail: { url: 'https://www.everythingcryptopro.com/api/blog/photo/what-is-matic-network-and-matic-coin-or-easy-explanation' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
