const { ethers } = require('ethers')
const matic = new ethers.providers.JsonRpcProvider(process.env.MATIC_RPC)

module.exports = {
    matic,
}
