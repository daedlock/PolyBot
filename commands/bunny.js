const { getPrice } = require('../coins/Bunny')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'POLYBUNNY',
            thumbnail: { url: 'https://i.ibb.co/nPZjCXZ/token-bunny-a8b61846.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
