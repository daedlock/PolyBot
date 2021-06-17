const { supportedCoins } = require('../config')
module.exports = message => {
    message.reply(`
    Supported Coins: **${supportedCoins.join(', ')}**`)
}
