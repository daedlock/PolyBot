const { getPrice } = require('../coins/Eth')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Etherum',
            thumbnail: { url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
