const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/SLP.abi.json')
const Matic = require('./Matic')

// SushiSwap
const MATIC_AURUM_PAIR = '0x91670a2a69554c61d814cd7f406d7793387e68ef'

async function getPrice() {
    const MaticAurumPair = new ethers.Contract(MATIC_AURUM_PAIR, PairABI, provider.matic)
    const MaticPrice = await Matic.getPrice()
    const [MaticAmount, AurumAmount] = await MaticAurumPair.getReserves()
    return (MaticAmount * MaticPrice) / AurumAmount
}


const Aurum = {
    getPrice,
    // subscribePair,
}

module.exports = Aurum
