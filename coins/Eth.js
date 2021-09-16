const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const WETH_USDC_PAIR = '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'

async function getPrice() {
    const WethUsdcPair = new ethers.Contract(WETH_USDC_PAIR, PairABI, provider.matic)
    const [reserve0, reserve1] = await WethUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Matic = {
    getPrice,
}

module.exports = Matic
