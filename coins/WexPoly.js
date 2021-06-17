const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//wault
const WEX_USDC_PAIR = '0x5DE6a3CcA10d3F788EEdbD4923e31D4658bf6f9a'

async function getPrice() {
    const WexUsdcPair = new ethers.Contract(WEX_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await WexUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

const WexPoly = {
    getPrice,
}

module.exports = WexPoly
