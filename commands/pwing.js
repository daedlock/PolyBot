const { getPrice } = require('../coins/Pwing')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'PWING',
            thumbnail: { url: 'https://jetswap.finance/images/tokens/wings.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
