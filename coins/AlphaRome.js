const provider = require('../provider')
const { ethers } = require('ethers')
const PairABI = require('../abis/Pair.abi.json')
const Movr = require('./Movr')


// SolarBeam
const FRAX_ALPHAROME_LP = '0xcf06cfb361615c49403b45a5e56e3b7da3462eea'

async function getPrice() {
    const FraxAlphaRomePair = new ethers.Contract(FRAX_ALPHAROME_LP, PairABI, provider.movr)
    const [FraxAmount, AlphaRomeAmount] = await FraxAlphaRomePair.getReserves()
    FraxPrice = 1.0*1e-9
    return (FraxAmount * FraxPrice) / AlphaRomeAmount 
}

const AlphaRome = {
    getPrice,
}

module.exports = AlphaRome
