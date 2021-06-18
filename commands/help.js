const { supportedCoins } = require('../config')
const helpMessage = `
\`\`\`

     
                                ▓▓▓▓            
                             ▓▓▓▓  ▓▓▓▓         
                            ▓▓       ▓▓         
                            ▓▓          ▓▓▓▓▓▓  
                             ▓▓▒    ▓▓▓▓     ▓▓▓
                               ▓▓▓▓▓▓         ▓▓
                                      ▓       ▓▓
                                      ▓▓▓▓  ▓▓▓▓
                                         ▓▓▓▓   
    
            ██████╗  ██████╗ ██╗  ██╗   ██╗██████╗  ██████╗ ████████╗
            ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝██╔══██╗██╔═══██╗╚══██╔══╝
            ██████╔╝██║   ██║██║   ╚████╔╝ ██████╔╝██║   ██║   ██║   
            ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██╔══██╗██║   ██║   ██║   
            ██║     ╚██████╔╝███████╗██║   ██████╔╝╚██████╔╝   ██║   
            ╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═════╝  ╚═════╝    ╚═╝   
                                                                                       
    Available Commands: 
    
    !eth                fetch ETH price from pair reserve pool (realtime)
    !matic              fetch MATIC price from pair reserve pool (realtime)
    !qi                 fetch Qi price from pair reserve pool (realtime)
    !wex                fetch WexPoly price from pair reserve pool (realtime)
    !wexp               fetch WexPoly price from pair reserve pool (realtime)
    !wexpoly            fetch WexPoly price from pair reserve pool (realtime)
    !addy               fetch ADDY price from pair reserve pool (realtime)
    !ecr                fetch collateral ratio (ECR & TCR)
    !alert              alert when a coin price goes off the threshold
    !alertstats         prints information about saved alerts
    !supportedcoins     a list of the supported coins
    !help               print this message
    
    
\`\`\`
`
module.exports = message => {
    message.reply(helpMessage)

}
