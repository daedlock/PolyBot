const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Movr = require('./Movr')


// SolarBeam
const KAFE_MOVR_LP = '0xb60B5ddAe68aE71481d26659A1D0E9A9D941a8d1'

async function getPrice() {
    const KafeMovrKPair = new ethers.Contract(KAFE_MOVR_LP, PairABI, provider.movr)
    const [KafeAmount, MovrAmount] = await KafeMovrKPair.getReserves()
    const MovrPrice = await Movr.getPrice()
    return (MovrAmount * MovrPrice) / KafeAmount
}

const Kafe = {
    getPrice,
}

module.exports = Kafe
