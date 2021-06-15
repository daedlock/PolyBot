require('dotenv').config()
const {provider} = require('./web3')
// cron
const { worker,notifySubscribers } = require('./cron/fetchPrices')
const cron = require('node-cron')

cron.schedule('*/30 * * * * *', () => {
    console.log('fetching prices')
    worker()

})



// donation
const { client } = require('./common/discordClient')


module.exports = {
    client,
    getClient: () => client,
}
