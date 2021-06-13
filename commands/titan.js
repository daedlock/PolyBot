const { getTitanPrice } = require('../lib/getPrice')
const { client } = require('../index')

module.exports = async message => {
    const price = await getTitanPrice()
    message.reply(price)
}
