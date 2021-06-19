require('dotenv').config()
// cron
const { beat } = require('./cron/heartbeat')
const cron = require('node-cron')
const cleanupPrices = require('./cron/db_clean')

cron.schedule('*/30 * * * * *', () => {
    beat()
})


// daily 8am
cron.schedule('0 8 * * *', () => {
    cleanupPrices()
})


// donation
const { client } = require('./common/discordClient')


module.exports = {
    client,
}
