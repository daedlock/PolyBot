const { getPrice } = require('../coins/Cake')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Pancake Swap (CAKE)',
            thumbnail: { url: 'https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
