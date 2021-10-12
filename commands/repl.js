const { MessageEmbed } = require('discord.js')

const wrapPre = (str)=> '```' + str + '```'
module.exports = async message => {

    const responseMsg = await message.reply(wrapPre('testFailed)'))

        const P = [
            '[          ]',
            '[==        ]',
            '[======    ]',
            '[========  ]',
            '[==========]',
        ];
        let x = 0;
        const loader = setInterval(async () => {
            const i = x % (P.length)

            console.log(i)
            await responseMsg.edit(wrapPre(P[i]+  i + ' Loading...'));
            x++
        }, 1000);

        setTimeout(async ()=>{
            await clearInterval(loader)
            await responseMsg.edit(wrapPre("✅ Done"))
        }, 10000)
}
