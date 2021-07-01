const parseDiscordMessageParams = require('./utils/parseDiscordMessageParams')
const ERC20Reader  = require('../utils/ERC20Reader')
const { convertToInternationalCurrencySystem } = require('../utils/numbers')
const { MessageEmbed } = require('discord.js')
const {BigNumber} = require('ethers')
module.exports = async message => {
    const [addr] = parseDiscordMessageParams(message.cleanContent)
    const Token = ERC20Reader(addr)
    try {
        const totalSupply = await Token.totalSupply()
        const decimals = await Token.decimals()
        const formattedTotalSupply = convertToInternationalCurrencySystem(BigNumber.from(totalSupply).div(Math.pow(10, decimals).toString()).toString())
        message.reply({
            embed: {
                title: await Token.symbol(),
                color: '#4ECDC4',
                url: `https://polygonscan.com/address/${addr}`,
                fields: [{
                    name: "Total Supply",
                    value: formattedTotalSupply
                }, {
                    name: 'Owner',
                    value: await Token.owner()
                }]
            }
        })
    } catch (e) {
        message.reply(`No, **${addr}** is not a valid ERC20 address`)
    }
}

