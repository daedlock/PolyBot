require('dotenv').config()

const Discord = require('discord.js')
const config = require('./config.json')

const prefix = '!'

const commands = {
    titan: require('./commands/titan'),
    iron: require('./commands/iron'),
    tcr: require('./commands/tcr'),
    ecr: require('./commands/ecr'),
}
const client = new Discord.Client()

client.on('message', function (message) {
    if (message.author.bot) return

    if (message.cleanContent.startsWith(prefix)) {
        const commandBody = message.content.slice(prefix.length)
        const args = commandBody.split(' ')
        const command = args.shift().toLowerCase()
        if(commands[command])
        commands[command](message)
    }
})

client.login(config.BOT_TOKEN)

module.exports = {
    client,
}
