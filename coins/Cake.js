const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Bnb = require('./Bnb')

// PancakeSwap
const CAKE_BNB_PAIR = '0x0ed7e52944161450477ee417de9cd3a859b14fd0'

async function getPrice() {
    const CakeBnbPair = new ethers.Contract(CAKE_BNB_PAIR, PairABI, provider.bsc)
    const [CakeAmount, BnbAmount] = await CakeBnbPair.getReserves()
    const BnbPrice = await Bnb.getPrice()
    return (BnbAmount * BnbPrice) / CakeAmount
}

const Cake = {
    getPrice,
}

module.exports = Cake
