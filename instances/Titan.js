const provider = require('../provider')
const TitanABI = require('../abis/Titan.abi.json')
const { ethers } = require('ethers')
const { addresses } = require('../config')

const Titan = new ethers.Contract(addresses.Titan, TitanABI, provider)

module.exports = Titan
