const { getPrice } = require('../coins/Movr')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'MOVR',
            thumbnail: {
                url: 'https://pbs.twimg.com/profile_images/1402056766880464900/HNcouH0x_400x400.jpg'
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
