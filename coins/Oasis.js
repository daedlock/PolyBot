const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Bnb = require('./Bnb')

// PancakeSwap
const OASIS_BNB_PAIR = '0xa487e06cb74790a09948a69c81a44a12f8ffa6c3'

async function getPrice() {
    const OasisBnbPair = new ethers.Contract(OASIS_BNB_PAIR, PairABI, provider.bsc)
    const [OasisAmount, BnbAmount] = await OasisBnbPair.getReserves()
    const BnbPrice = await Bnb.getPrice()
    return (BnbAmount / OasisAmount) * BnbPrice *1.0
}

const Oasis = {
    getPrice,
}

module.exports = Oasis
