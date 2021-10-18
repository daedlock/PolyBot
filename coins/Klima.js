const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Bct = require('./Bct')

// SushiSwap
const BCT_KLIMA = '0x9803c7aE526049210a1725F7487AF26fE2c24614'

async function getPrice() {
    const BctKlimaPair = new ethers.Contract(BCT_KLIMA, PairABI, provider.matic)
    const [BctAmount, KlimaAmount] = await BctKlimaPair.getReserves()
    const BctPrice = await Bct.getPrice()
    return BctPrice * (BctAmount * 1e12) / KlimaAmount 
}


const Klima = {
    getPrice,
}

module.exports = Klima
