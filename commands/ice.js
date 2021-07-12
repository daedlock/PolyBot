const { getPrice } = require('../coins/Ice')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'ICE',
            thumbnail: { url: 'https://cdn.discordapp.com/attachments/794129085387374592/862637810138087434/5.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })

}
