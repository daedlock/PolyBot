
const ethers = require("ethers");
const ERC20ABI = require('../abis/ERC20.abi.json')
const provider = require('../provider')

module.exports = (addr) => {
 try {
     return new ethers.Contract(addr, ERC20ABI, provider)
 }    catch (e) {
     throw e
 }
}
