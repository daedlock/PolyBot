const { getPrice } = require('../coins/Qi')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Qi',
            thumbnail: { url: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/qi.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
