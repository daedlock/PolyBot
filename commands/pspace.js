const { getPrice } = require('../coins/PSpace')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'pSpace',
            thumbnail: { url: 'https://i.ibb.co/xzcPTqW/SPACE.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
