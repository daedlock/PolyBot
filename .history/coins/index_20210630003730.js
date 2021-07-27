const Matic = require('./Matic')
const Qi = require('./Qi')
const WexPoly = require('./WexPoly')
const Addy = require('./Addy')
const Eth = require('./Eth')
const Pup = require('./Pup')

//exported coins are automatically fetched by the worker each 30s.

module.exports = {
    Qi,
    WexPoly,
    Addy,
    Matic,
    Pup,
    Eth,
    Bone
}
