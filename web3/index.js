const Web3= require('web3')
const web3 = new Web3(process.env.INFURA_RPC)
web3.eth.defaultAccount = process.env.DONATION_WALLET

module.exports = {
    web3
}
