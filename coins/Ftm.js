const provider = require('../provider')
const { ethers } = require('ethers')
const ChainLinkABI = require('../abis/ChainLink.abi.json')

const FTM_USDC_ORACLE = `0xf4766552d15ae4d256ad41b6cf2933482b0680dc`


async function getPrice() {
    const FtmUsdcPair = new ethers.Contract(FTM_USDC_ORACLE, ChainLinkABI, provider.ftm)
    price = await FtmUsdcPair.latestAnswer()
    return price / 1e8
}


const Ftm = {
    getPrice,
}

module.exports = Ftm



// var Web3 = require('web3');
// let w3 = new Web3(new Web3.providers.HttpProvider(process.env.FTM_RPC));

// let oracle = new w3.eth.Contract(CHAINLINK_ORACLE_ABI, ORACLE_ADDRESS);

// oracle.methods.latestAnswer().call({}, function(error, res) {
//     if (error != null) {
//         console.log(error)
//         return;
//     }
//     console.log("Latest price was:" ,res)
// }
// oracle.methods.latestTimestamp().call({}, function(error, res) {
//     if (error != null) {
//         console.log(error)
//         return;
//     }
//     console.log("Latest timestamp for price was:" ,res)
// });