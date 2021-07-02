const provider = require('../provider')
const PairABI = require('../abis/Pair.abi.json')
const { ethers } = require('ethers')

const Eth = require('./Eth')

const BUNNY_WETH_PAIR = '0x4e540fad17f1a51380Fa2BbA7185DBdF4f54A713'
async function getPrice() {
    // Bunny Bunny Pool (quickswap)
    const MaticBunnyPair = new ethers.Contract(BUNNY_WETH_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await MaticBunnyPair.getReserves()
    const priceInEth = reserve0 / reserve1
    const ethPrice = await Eth.getPrice()
    return priceInEth * ethPrice
}

const Bunny = {
    getPrice,
}

module.exports = Bunny
