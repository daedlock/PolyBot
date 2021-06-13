const Treasury = require('../instances/Treasury')

module.exports = async message => {
    const ratio = await Treasury.target_collateral_ratio() / 10000
    message.reply(`Target Collateral Ratio: **${ratio.toFixed(2)}%**`)

}
