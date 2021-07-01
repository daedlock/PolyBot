const provider = require('../provider')
const PairABI = require('../abis/Pair.abi.json')
const { ethers } = require('ethers')

const Eth = require('./Eth')

const BUNNY_WMATIC_PAIR = '0x62052b489cb5bc72a9dc8eeae4b24fd50639921a'
async function getPrice() {
    // Bunny Bunny Pool (quickswap)
    const MaticBunnyPair = new ethers.Contract(BUNNY_WMATIC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await MaticBunnyPair.getReserves()
    const priceInEth = reserve1 / reserve0
    const ethPrice = await Eth.getPrice()
    return priceInEth * ethPrice
}

const Bunny = {
    getPrice,
}

module.exports = Bunny
