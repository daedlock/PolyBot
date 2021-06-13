const ShareOracle = require('../instances/ShareOracle')
const CollateralOracle = require('../instances/CollateralOracle')
require('dotenv').config()


async function getTitanPrice() {
    const val = await ShareOracle.consult()
    return `TITAN: **$${val.toNumber() / 1000000}**`
}
async function getIronPrice() {
    const val = await CollateralOracle.consult()
    return `IRON: **$${val.toNumber() / 1000000}**`
}

module.exports = { getTitanPrice, getIronPrice }
