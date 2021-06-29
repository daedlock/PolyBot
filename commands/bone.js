const { getPrice } = require('../coins/Bone')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'BONE',
            thumbnail: { url: 'https://bone.polypup.finance/images/egg/2.png' },
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
