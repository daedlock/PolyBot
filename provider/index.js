const { ethers } = require('ethers')
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_RPC)

module.exports = provider
