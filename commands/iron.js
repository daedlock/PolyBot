const { getPrice } = require('../coins/Iron')

module.exports = async message => {
    const price = await getPrice()
    message.reply({

        embed: {
            title:"IRON",
            thumbnail: {url: 'https://polygon.iron.finance/static/media/IRON.484ee2b8.png'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]
        },
    })}
