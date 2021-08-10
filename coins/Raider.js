const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/SLP.abi.json')
const Matic = require('./Matic')

//sushiswap
const RAIDER_MATIC_PAIR = '0x2E7d6490526C7d7e2FDEa5c6Ec4b0d1b9F8b25B7'

async function getPrice() {
    const raiderMaticPair = new ethers.Contract(RAIDER_MATIC_PAIR, PairABI, provider)
    const maticPrice = await Matic.getPrice()
    const [reserve0, reserve1] = await raiderMaticPair.getReserves()
    return (reserve0 * maticPrice) / reserve1
}


async function subscribePair() {
   const RaiderMaticPair = new ethers.Contract(RAIDER_MATIC_PAIR, PairABI, provider)
   RaiderMaticPair.on('Sync', async (reserve0, reserve1) => {
    const maticPrice = await Matic.getPrice()
    const raiderPrice = (reserve0 * maticPrice) / reserve1
    console.log('RAIDER: ' + raiderPrice)
    return raiderPrice    
    })
}

const Raider = {
    getPrice,
    // subscribePair,
}

module.exports = Raider
