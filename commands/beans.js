const { getPrice } = require('../coins/Beans')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Moonbeans [BEANS]',
            thumbnail: { url: 'https://assets.coingecko.com/coins/images/18547/small/logo_-_2021-09-23T100943.437.png?1632362992'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
