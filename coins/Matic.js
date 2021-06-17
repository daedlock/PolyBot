const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI  = require('../abis/Pair.abi.json')

//quickswap
const MATIC_USDC_PAIR = "0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827"

async function getPrice() {
    const maticUsdcPair = new ethers.Contract(MATIC_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await maticUsdcPair.getReserves()
    return reserve1 * 1e12 / reserve0
}

const Matic = {
    getPrice,
}

module.exports = Matic
