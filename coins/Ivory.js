const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
//quickswap
const IVORY_USDC_PAIR = '0x10995233Ef7b3abd1a2706a86FFeA456ebae8796'

async function getPrice() {
    const IvoryUsdcPair = new ethers.Contract(IVORY_USDC_PAIR, PairABI, provider.matic)
    const [reserve0, reserve1] = await IvoryUsdcPair.getReserves()
    return reserve0 / reserve1 * 1e12
}

const Ivory = {
    getPrice,
}

module.exports = Ivory
