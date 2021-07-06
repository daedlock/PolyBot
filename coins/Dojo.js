const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const DOJO_USDC_PAIR = '0xd30c6e1cfced1d3441f0e97945e2b914b3605fa6'

async function getPrice() {
    const dojoUsdcPair = new ethers.Contract(DOJO_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await dojoUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Dojo = {
    getPrice,
}

module.exports = Dojo
