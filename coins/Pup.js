const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const PUP_USDC_PAIR = '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC'

async function getPrice() {
    const PupUsdcPair = new ethers.Contract(PUP_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await PupUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Pup = {
    getPrice,
}

module.exports = Pup
