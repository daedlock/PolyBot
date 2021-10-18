const { getPrice } = require('../coins/Avax')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Avalanche C-Chain (AVAX)',
            thumbnail: {
                url: 'https://assets.coingecko.com/coins/images/18674/large/avax_logo_1.png',
            },
            fields: [
                {
                    name: 'Price',
                    value: `**$${price}**`,
                },
            ],
        },
    })
}
