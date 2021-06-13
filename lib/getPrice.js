const ShareOracle = require('../instances/ShareOracle')
const CollateralOracle = require('../instances/CollateralOracle')
require('dotenv').config()


async function getTitanPrice() {
    const val = await ShareOracle.consult()
    return val.toNumber() / 1000000
}
async function getIronPrice() {
    const val = await CollateralOracle.consult()
    return val.toNumber() / 1000000
}

module.exports = { getTitanPrice, getIronPrice }
