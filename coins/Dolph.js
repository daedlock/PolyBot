const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const DOLPH_USDC_PAIR = '0x7a9A82fbB67262064C442652099936815eD2f78C'

async function getPrice() {
    //usdc
    const DolphUsdcPair = new ethers.Contract(DOLPH_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await DolphUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}


async function subscribePair() {
    const PupMaticPair = new ethers.Contract(DOLPH_USDC_PAIR, PairABI, provider)
    PupMaticPair.on('Sync', async (reserve0, reserve1) => {
        const maticPrice = await Matic.getPrice()
        console.log('DOLPH: ' +  (reserve0 * 1e12) / reserve1)
        return  (reserve0 * 1e12) / reserve1
    })

}

const Dolph = {
    getPrice,
    subscribePair,
}

module.exports = Dolph
