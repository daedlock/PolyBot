require('dotenv').config()
const {provider} = require('./web3')
// cron
const { beat } = require('./cron/heartbeat')
const cron = require('node-cron')

cron.schedule('*/30 * * * * *', () => {
    beat()

})



// donation
const { client } = require('./common/discordClient')


module.exports = {
    client,
    getClient: () => client,
}
