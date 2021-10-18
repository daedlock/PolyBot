const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

//quickswap
const USDC_BCT = '0x1E67124681b402064CD0ABE8ed1B5c79D2e02f64'

async function getPrice() {
    const UsdcBctPair = new ethers.Contract(USDC_BCT, PairABI, provider.matic)
    const [UsdcAmount, BctAmount] = await UsdcBctPair.getReserves()
    return (UsdcAmount * 1e12) / BctAmount 
}
0x4e78011Ce80ee02d2c3e649Fb657E45898257815

const Bct = {
    getPrice,
}

module.exports = Bct
