const { getPrice } = require('../coins/Dolph')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'DOLPH',
            thumbnail: { url: 'https://i.ibb.co/ZLZ3Krx/dolph.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
