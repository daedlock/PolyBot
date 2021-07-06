const { getPrice } = require('../coins/Dojo')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'MATIC',
            thumbnail: {
                url: 'https://polygon.dojofarm.finance/images/dojo/9.png',
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
