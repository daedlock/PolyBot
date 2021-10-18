const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Avax = require('./Avax')

// TraderJoe
const AVAX_TIME_PAIR = '0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917'

async function getPrice() {
    const AvaxTimePair = new ethers.Contract(AVAX_TIME_PAIR, PairABI, provider.avax)
    const AvaxPrice = await Avax.getPrice()
    const [AvaxAmount, TimeAmount] = await AvaxTimePair.getReserves()
    return (AvaxAmount * AvaxPrice) / TimeAmount / 1e9
}


const Time = {
    getPrice,
    // subscribePair,
}

module.exports = Time
