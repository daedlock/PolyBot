const addresses = require('../lib/addresses')
const provider = require('../provider')
const TreasuryABI = require('../abis/Treasury.abi.json')
const { ethers } = require('ethers')

const Treasury = new ethers.Contract(addresses.Treasury, TreasuryABI, provider)

module.exports = Treasury
