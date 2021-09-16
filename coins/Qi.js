const provider = require('../provider')
const PairABI = require('../abis/Pair.abi.json')
const { ethers } = require('ethers')

const Matic = require('./Matic')

const MATIC_QI_PAIR = '0x9a8b2601760814019b7e6ee0052e25f1c623d1e6'
async function getPrice() {
    // Qi Matic Pool (quickswap)
    const QiMaticPair = new ethers.Contract(MATIC_QI_PAIR, PairABI, provider.matic)
    const [reserve0, reserve1] = await QiMaticPair.getReserves()
    const priceInMatic = reserve0 / reserve1
    const maticPrice = await Matic.getPrice()
    return priceInMatic * maticPrice
}

const Qi = {
    getPrice,
}

module.exports = Qi
