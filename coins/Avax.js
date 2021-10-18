const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

// TraderJoe
const USDC_AVAX_PAIR = '0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1'

async function getPrice() {
    const UsdcAvaxPair = new ethers.Contract(USDC_AVAX_PAIR, PairABI, provider.avax)
    const [USDCAmount, AvaxAmount] = await UsdcAvaxPair.getReserves()
    return (USDCAmount * 1e12) / AvaxAmount
}

const Avax = {
    getPrice,
}

module.exports = Avax
