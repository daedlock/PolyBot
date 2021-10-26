const { getPrice } = require('../coins/Aurum')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Crypto Raiders Aurum (AURUM)',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/18131/large/xcqAUkU.png' },            
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
