const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const DOJO_USDC_PAIR = '0x3324af8417844e70b81555a6d1568d78f4d4bf1f'

async function getPrice() {
    const dinoUsdcPair = new ethers.Contract(DOJO_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await dinoUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Dojo = {
    getPrice,
}

module.exports = Dojo
