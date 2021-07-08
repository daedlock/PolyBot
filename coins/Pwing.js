const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const PWING_USDC = '0xaf623E96d38191038C48990Df298e07Fb77b56c3'

async function getPrice() {
    const pwingUsdcPair = new ethers.Contract(PWING_USDC, PairABI, provider)
    const [reserve0, reserve1] = await pwingUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Matic = {
    getPrice,
}

module.exports = Matic
