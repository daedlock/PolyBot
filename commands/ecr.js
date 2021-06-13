const Treasury = require('../instances/Treasury')

module.exports = async message => {
    const ratio = await Treasury.effective_collateral_ratio()/10000
    message.reply(`Effective Collateral Ratio: **${ratio.toFixed(2)}%**`)
}
