const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Matic = require('./Matic')

//quickswap
const PUP_USDC_PAIR = '0x767f8BD67a5f133BdDF3b285c5E2FD3D157A2cdC'
const PUP_MATIC_PAIR = '0xBC68d2A5920c4ffaEa20E2BE48a0E09055481976'
async function getPrice() {
    //usdc
    const PupUsdcPair = new ethers.Contract(PUP_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await PupUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}

async function getPrice2() {
    //matic
    const PupMaticPair = new ethers.Contract(PUP_MATIC_PAIR, PairABI, provider)
    const maticPrice = await Matic.getPrice()
    const [reserve0, reserve1] = await PupMaticPair.getReserves()
    return (reserve0 / reserve1) * maticPrice
}

async function subscribePair() {
    const PupMaticPair = new ethers.Contract(PUP_MATIC_PAIR, PairABI, provider)
    PupMaticPair.on('Sync', async (reserve0, reserve1) => {
        const maticPrice = await Matic.getPrice()
        console.log('Pup: ' + (reserve0 / reserve1) * maticPrice)
        return (reserve0 / reserve1) * maticPrice
    })

    // PupMaticPair.on('Swap', async (amount0In, amount1In, amount0Out) => {
    //     const buys =  amount0In/1e18
    //     const sells =  amount0Out/1e18
    //     if (buys) {
    //         console.log('++'+buys)
    //     } else {
    //         console.log('--'+sells)
    //     }
    // })
}

const Pup = {
    getPrice,
    getPrice2,
    subscribePair,
}

module.exports = Pup
