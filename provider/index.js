const { ethers } = require('ethers')
const matic = new ethers.providers.JsonRpcProvider(process.env.MATIC_RPC)
const movr = new ethers.providers.JsonRpcProvider(process.env.MOVR_RPC)

module.exports = {
    matic,
    movr,
}
