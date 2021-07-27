const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Matic = require('./Matic')

//quickswap
const BONE_USDC_PAIR = '0x2cc05c660f35e8692ca99db95922cb744d44ef20'

async function getPrice() {
    //usdc
    const BoneUsdcPair = new ethers.Contract(BONE_USDC_PAIR, PairABI, provider)
    const [reserve0, reserve1] = await BoneUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}


async function subscribePair() {
    const PupMaticPair = new ethers.Contract(BONE_USDC_PAIR, PairABI, provider)
    PupMaticPair.on('Sync', async (reserve0, reserve1) => {
        const maticPrice = await Matic.getPrice()
        console.log('BONE: ' + (reserve0 / reserve1) * maticPrice)
        return (reserve0 / reserve1) 
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

const Bone = {
    getPrice,
    subscribePair,
}

module.exports = Bone
