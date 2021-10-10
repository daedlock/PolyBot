
const { ethers } = require('ethers')

// RPCs for different chains

// Ethereum Mainnet (ETH)
const eth = new ethers.providers.JsonRpcProvider(process.env.MAINNET_RPC)

// Fantom Opera (FTM)
const ftm = new ethers.providers.JsonRpcProvider(process.env.FTM_RPC) 

// Polygon Mainnet (MATIC)
const matic = new ethers.providers.JsonRpcProvider(process.env.MATIC_RPC)

// Moonriver Mainnet (MOVR)
const movr = new ethers.providers.JsonRpcProvider(process.env.MOVR_RPC)


module.exports = {
    eth,
    ftm,
    matic,
    movr,
}
