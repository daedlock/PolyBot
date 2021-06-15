require('dotenv').config()

// cron
const fetchPrices = require('./cron/fetchPrices')
const cron = require('node-cron')

cron.schedule('*/30 * * * * *', () => {
    console.log('fetching prices')
    fetchPrices()
})

const { client } = require('./common/discordClient')

module.exports = {
    client,
    getClient: () => client,
}
