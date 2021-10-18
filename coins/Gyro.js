const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

// PancakeSwap
const GYRO_USDT_PAIR = '0x5ca063a7e2bebefeb2bdea42158f5b825f0f9ffb'

async function getPrice() {
    const GyroUsdtPair = new ethers.Contract(GYRO_USDT_PAIR, PairABI, provider.bsc)
    const [GyroAmount, UsdtAmount] = await GyroUsdtPair.getReserves()
    return (UsdtAmount / GyroAmount) / 1e9
}

const Gyro = {
    getPrice,
}

module.exports = Gyro
