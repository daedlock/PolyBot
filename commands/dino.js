const { getPrice } = require('../coins/DINO')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'DINO',
            thumbnail: { url: 'https://dinoswap.exchange/images/farms/dino.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
