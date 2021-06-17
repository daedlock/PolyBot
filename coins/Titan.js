const provider = require('../provider')
const TitanABI = require('../abis/Titan.abi.json')
const { ethers } = require('ethers')
const { addresses } = require('../config')

const TitanContract = new ethers.Contract(addresses.Titan, TitanABI, provider)
const ShareOracle = require('../instances/ShareOracle')
require('dotenv').config()

async function getPrice() {
    const val = await ShareOracle.consult()
    return val.toNumber() / 1000000
}

module.exports = {
    getPrice,
    TitanContract,
}
