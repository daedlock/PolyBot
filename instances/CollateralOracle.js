const { addresses } = require('../config')
const provider = require('../provider')
const CollateralOracleABI = require('../abis/CollateralOracle.abi.json')
const { ethers } = require('ethers')

const CollateralOracle = new ethers.Contract(
    addresses.CollateralOracle,
    CollateralOracleABI,
    provider,
)

module.exports = CollateralOracle
