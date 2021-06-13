const { getIronPrice } = require('../lib/getPrice')

module.exports = async message => {
    const price = await getIronPrice()
    message.reply(price)
}
