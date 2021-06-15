const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


module.exports = async message => {

    const totalAlerts = await prisma.alert.count()
    const uniqueUsers = await prisma.alert.findMany({distinct: ['discordUser']})
    message.reply(`I have **${totalAlerts}** alert requests from *${uniqueUsers.length}* unique users in my database for **TITAN**`)
    await prisma.$disconnect()
}
