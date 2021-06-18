// Delete price data older than 3 days
const moment = require('moment')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const CUTOFF_DATE_IN_HOURS = 12

const cleanupPrices = async () => {
    console.log("Cleaning up Prices")
    const refTimestamp = moment().subtract(CUTOFF_DATE_IN_HOURS, 'hours').toDate()

    await prisma.priceItem.deleteMany({
        where:{
            createdAt: {
                lt: refTimestamp
            }
        }
    })

}

module.exports = cleanupPrices
