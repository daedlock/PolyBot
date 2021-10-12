const { getPrice } = require('../coins/Dino')
const { MessageEmbed, MessageAttachment } = require('discord.js')
const axios = require('axios')
const parseDiscordMessageParams = require('./utils/parseDiscordMessageParams')
const cheerio = require('cheerio')
const { eth, matic } = require('../provider')
const { getBlockTime } = require('../utils/block')
const scrapeCountdown = (blockNumber) => {
    cont
}

module.exports = async message => {
    let [blockNumber] =
        parseDiscordMessageParams(message.cleanContent)

    const loadingMsg = await message.channel.send({ files: ['https://preview.redd.it/a8keeuutawx01.gif?s=f5df297c8f40bd997b0cb306cdecdfcfa5c26f53'] })
    const blockData = await getBlockTime(blockNumber)
    const { days, hours, minutes, seconds, screenshot } = blockData
    if (days) {


        console.log(screenshot)
// inside a command, event listener, etc.
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Polygon Block Countdown')
            .setURL(`https://polygonscan.com/block/${blockNumber}`)
            .setDescription('Estimated time for a future block to be mined. Estimate might be in-accurate due to variations in block times')
            .setThumbnail('https://cryptologos.cc/logos/polygon-matic-logo.png?v=014')
            .addFields(
                { name: 'Days', value: days },
                // { name: '\u200B', value: '\u200B' },
                { name: 'Hours', value: hours },
                { name: 'Minutes', value: minutes },
                { name: 'Seconds', value: seconds },
            )
            .setTimestamp()
            .setFooter('Fetched from PolygonScan', 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=014');

        message.reply({ embed })
        const replyM = message.channel.send({files:[`/tmp/${blockNumber}.png`]})
    } else {
        const embed= new MessageEmbed()
            .setColor('#9900ff')
            .setTitle('Polygon Block')
            .setURL(`https://polygonscan.com/block/${blockNumber}`)
            .setThumbnail('https://cryptologos.cc/logos/polygon-matic-logo.png?v=014')
            .addFields(
                { name: 'Mined', value: blockData },
            )
            .setTimestamp()
            .setFooter('Fetched from PolygonScan', 'https://cryptologos.cc/logos/polygon-matic-logo.png?v=014');

        message.reply({ embed })

    }

    await loadingMsg.delete()

}
