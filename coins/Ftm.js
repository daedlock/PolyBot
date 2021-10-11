const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')

// SpookySwap Liquidity Pool
const FTM_USDC_LP = `0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c`

async function getPrice() {
    const FtmUsdcPair = new ethers.Contract(FTM_USDC_LP, PairABI, provider.ftm)
    const [reserve0, reserve1] = await FtmUsdcPair.getReserves()
    return (reserve0 * 1e12) / reserve1
}


const Ftm = {
    getPrice,
}

module.exports = Ftm

/* Compute Price Using ChainLink Price Feed (FTM) 
const ChainLinkABI = require('../abis/ChainLink.abi.json')
const FTM_USDC_CHAINLINK_PRICE_FEED = `0xf4766552d15ae4d256ad41b6cf2933482b0680dc`
price = await FtmUsdcPair.latestAnswer()
return price / 1e8
*/