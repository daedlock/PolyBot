const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Eth = require('./Eth')
//quickswap
const ADDY_ETH_PAIR = '0xa5BF14BB945297447fE96f6cD1b31b40d31175CB'

async function getPrice() {
    const AddyWethPair = new ethers.Contract(ADDY_ETH_PAIR, PairABI, provider.matic)
    const [reserve0, reserve1] = await AddyWethPair.getReserves()
    const EthPrice = await Eth.getPrice()
    return reserve0 / reserve1  * EthPrice
}

const Addy = {
    getPrice,
}

module.exports = Addy
