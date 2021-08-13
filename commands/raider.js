const { getPrice } = require('../coins/Raider')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'RAIDER',
            thumbnail: { url: 'https://cdn.discordapp.com/icons/860057024611876865/9bdca310e593b9276c11ee8b309a8fc0.png' },            
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
