const { getPrice } = require('../coins/Time')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'Wonderland Time (TIME)',
            thumbnail: {
                url: 'https://files.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-MhzA-YXhEZ1wM1iWJEo%2F-MiQzpjkumrqycMXcTj6%2F-MiR0TC116IqSmoKpkwX%2FTime%20Token.png?alt=media&token=9ba1004c-5e23-4e6e-b4f8-19f109c557d0',
            },
            fields: [
                {
                    name: 'Price',
                    value: `**$${price}**`,
                },
            ],
        },
    })
}
