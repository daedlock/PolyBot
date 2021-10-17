const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

// PancakeSwap
const BNB_BUSD_PAIR = '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16'

async function getPrice() {
    const BnbBusdPair = new ethers.Contract(BNB_BUSD_PAIR, PairABI, provider.bsc)
    const [reserve0, reserve1] = await BnbBusdPair.getReserves()
    return (reserve1) / reserve0
}

const Bnb = {
    getPrice,
}

module.exports = Bnb
