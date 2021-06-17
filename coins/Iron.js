const provider = require('../provider')
const IronAbi = require('../abis/Iron.abi.json')
const { ethers } = require('ethers')
const { addresses } = require('../config')

const IronContract = new ethers.Contract(addresses.Titan, IronAbi, provider)
const CollateralOracle = require('../instances/CollateralOracle')

async function getPrice() {
    const val = await CollateralOracle.consult()
    return val.toNumber() / 1000000
}

// ANY NEW COINT MUST HA
module.exports = {
    getPrice,
    IronContract,
}
