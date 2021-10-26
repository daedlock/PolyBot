const { getPrice } = require('../coins/Kafe')
const { MessageEmbed } = require('discord.js')

module.exports = async message => {
    const price = await getPrice()
    message.reply({
        embed: {
            title: 'MoonKafe [KAFE]',
            thumbnail: { url: 'https://files.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Me3j2UiYlLDSHtSeM39%2F-Me4LfIHJeu69LsPVVAT%2F-Me4NOP61g_Klz61Eiz0%2F3.png?alt=media&token=94ba2c18-ee2f-465f-b767-970a44c64a07'},
            fields:[{
                name: "Price",
                value: `**$${price}**`
            }]        },
    })
}
