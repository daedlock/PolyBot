const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//dfyn
const ICE_USDC_PAIR = '0x34832D9AC4127a232C1919d840f7aaE0fcb7315B'

async function getPrice() {
    const iceUsdcPair = new ethers.Contract(ICE_USDC_PAIR, PairABI, provider.matic)
    const [reserve0, reserve1] = await iceUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const Matic = {
    getPrice,
}

module.exports = Matic
