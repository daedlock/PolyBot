const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const TITAN_USDC_PAIR = '0x8af511761c74af631258d8ee6096679ff4838cde'

async function getPrice() {
    //usdc
    const TitanUsdcPair = new ethers.Contract(TITAN_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await TitanUsdcPair.getReserves()
    return ((reserve0 * 1e12) / reserve1)
}

async function subscribePair() {
    const titanBalance = 77905660.795959579203091711
    const PupMaticPair = new ethers.Contract(TITAN_USDC_PAIR, PairABI, provider)
    PupMaticPair.on('Sync', async (reserve0, reserve1) => {
        console.log('TITAN: ' + ((reserve0 * 1e12) / reserve1) * titanBalance)
    })
}

const Bone = {
    getPrice,
    subscribePair,
}

module.exports = Bone
