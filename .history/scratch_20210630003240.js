console.logCopy = console.log.bind(console)

console.log = function (data) {
    var currentDate = '[' + new Date().toUTCString() + '] '
    console.logCopy(currentDate, data)
}

require('dotenv').config()

// const Titan = require('./instances/Titan')
require('dotenv').config()
const provider = require('./provider')
const moment = require('moment')
// const ERC20ABI = require('./abis/ERC20.abi.json')
const { parseMaticTx } = require('./utils/matic')
// const { addresses } = require('./config')
// const { getTitanPrice } = require('./lib/getPrice')
const { ethers } = require('ethers')
const PairABI = require('./abis/Pair.abi.json')
const Pup = require('./coins/Pup')
const Bone = require('./coins/Bone')
// const whenWasTokenMinted = async tokenId => {
//     const transfers = await gogoContract.getPastEvents('Transfer', {
//         fromBlock: 0,
//         toBlock: 'latest',
//         filter: { tokenId: '' + tokenId },
//         topics: ['0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'],
//     })
//
//     const transferEv = transfers.filter(t => t.returnValues['tokenId'] === tokenId + '')[0]
//     // logger.info(transferEv)
//     const tx = await web3.eth.getTransaction(transferEv.transactionHash)
//     // logger.info(tx)
//     const time = await web3.eth.getBlock(tx.blockNumber)
//     const diff = new Date().getTime() - time.timestamp * 1000
//
//     const minutes = diff / 1000 / 60
//     return { minutesAgo: minutes, ownerAddress: tx.from }
// }

let count = 0
let burned = 0
let minted = 0
let volume = 0
let timeEllapsed = moment()

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()



const runFilter = async () => {
    filter = {
        topics: [
            ethers.utils.id('Transfer(address,address,uint256)'),
            // null,
            ethers.utils.hexZeroPad("0x7D9632c43F6b5d1eAD848B3BF35AccbCB56beb47", 32),
        ],
    }

    provider.on(filter, async ev => {
        const { transactionHash } = ev
        const tx = await provider.getTransactionReceipt(transactionHash)
        try {
            await getTransferredAmount(transactionHash)
        } catch (e) {}
    })
}

const run = async() => {
    await parseMaticTx("0x83783bf3dd34624bde8a0d450131136ca0f0c18320c8ad9615d2853b554225fa")
}


const fetchMaticPrice = async() => {

}
const fetchTitanFromPair =async () => {
    const TitanMaticPair = new ethers.Contract("0x1b29d2af57e90111aebc69b2f757a7263cb54932", PairABI, provider)
    console.log()
   setInterval( async() => {
       const [reserve0, reserve1] = await TitanMaticPair.getReserves()
       console.log(reserve0/reserve1*1.4355)
   },5000)
}

const fetchQiFromPair =async () => {
    const TitanMaticPair = new ethers.Contract("0x9a8b2601760814019b7e6ee0052e25f1c623d1e6", PairABI, provider)
    console.log()
    setInterval( async() => {
        const [reserve0, reserve1] = await TitanMaticPair.getReserves()
        console.log("Qi: "+ reserve0/reserve1*1.4877)
    },5000)
}


const fetchWexpoly = async() => {
    // Wexpoly USDC pair
    const TitanMaticPair = new ethers.Contract("0x5DE6a3CcA10d3F788EEdbD4923e31D4658bf6f9a", PairABI, provider)
    setInterval( async() => {
        const [reserve0, reserve1] = await TitanMaticPair.getReserves()
        console.log("WEX:" + (reserve0 * 1e12 / reserve1))
    },5000)
}

const fetchMatic = async() => {
    //  USDC MATIC pair
    const TitanMaticPair = new ethers.Contract("0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827", PairABI, provider)
    setInterval( async() => {
        const [reserve0, reserve1] = await TitanMaticPair.getReserves()
        console.log("MATIC:" + (reserve1 * 1e12 / reserve0))
    },5000)
}

const fetchPupPrices = async () => {
    setInterval(async () => {
        const price1 = await Pup.getPrice();
        const price2 = await Pup.getPrice2();
        console.log(price1+ " | "+ price2 + " = " + Math.abs(100 - (price1/price2 * 100)))
    }, 30000)

}
const subPairPricePup = async () => {
   Bone.subscribePair()

}
subPairPricePup()
