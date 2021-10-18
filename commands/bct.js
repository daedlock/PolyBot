const { getPrice } = require('../coins/Bct')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: ' Toucan Protocol: Base Carbon Tonne (BCT)',
            thumbnail: { url: 'https://pbs.twimg.com/profile_images/1441433238350675973/CL0pu_91_400x400.jpg'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
