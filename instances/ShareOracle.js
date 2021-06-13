const addresses = require('../lib/addresses')
const provider = require('../provider')
const ShareOracleABI = require('../abis/ShareOracle.abi.json')
const { ethers } = require('ethers')

const ShareOracle = new ethers.Contract(addresses.ShareOracle, ShareOracleABI, provider)

module.exports = ShareOracle
