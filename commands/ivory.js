const { getPrice } = require('../coins/Ivory')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Ivory',
            thumbnail: { url: 'https://raw.githubusercontent.com/firebird-finance/firebird-assets/master/blockchains/polygon/assets/0x88a3aCAc5C48F93121d4d7771A068A1FCDE078BC/logo.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })

}
