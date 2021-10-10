const { getPrice } = require('../coins/Titan')
const { MessageEmbed } = require('discord.js')
const parseDiscordMessageParams = require('./utils/parseDiscordMessageParams')
const { objectToMessageFields } = require('./utils/misc')
const _ = require('lodash')
const allowedChains = ['eth', 'matic', 'movr']
module.exports = async message => {
    const [chain, txHash] = parseDiscordMessageParams(message.cleanContent)

    if(!allowedChains.includes(chain))
        return message.reply(`**${chain}** chain is unsupported. Supported chains: ${allowedChains.join(', ')}`)

    try {

        const provider = require('../provider')[chain]

        const txDetails = await provider.getTransaction(txHash)

        let fields = objectToMessageFields(_.pick(txDetails, ['hash', 'blockHash', 'blockNumber', 'from', 'to', 'gasLimit', 'gasPrice']))
        if(!fields.length)
            return message.reply(`❌ Error while getting tx details: ${chain} ➡️ ${txHash}`)

        message.reply({
            embed: {
                title: 'Tx',
                fields
            }
        })
    } catch (err) {
        console.error(err)
        message.reply('```\n' + JSON.stringify(err, null, 4) + '\n```')
    }
}
