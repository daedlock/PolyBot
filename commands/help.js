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
    
    Tokens:
    ------------------------------------------------------------------------------
    !eth                fetch ETH price from pair reserve pool (realtime)
    !matic              fetch MATIC price from pair reserve pool (realtime)
    !qi                 fetch Qi price from pair reserve pool (realtime)
    !wex                fetch WexPoly price from pair reserve pool (realtime)
    !wexp               fetch WexPoly price from pair reserve pool (realtime)
    !wexpoly            fetch WexPoly price from pair reserve pool (realtime)
    !addy               fetch ADDY price from pair reserve pool (realtime)
    !pup                fetch PUP price from pair reserve pool (realtime)
    !bone               fetch BONE price from pair reserve pool (realtime)
    !bunny              fetch POLYBUNNY price from pair reserve pool (realtime)
    !titan              fetch TITAN price from pair reserve pool (realtime)
    !ecr                fetch collateral ratio (ECR & TCR)
    !alert              alert when a coin price goes off the threshold
    !alertstats         prints information about saved alerts
    !supportedcoins     a list of the supported coins
    !help               print this message
    !gecko <coin>       print information about the coin from Coingecko
    
    Misc:
    -------------------------------------------------------------------------------
    !info <address> prints details for erc 20 tokens
    
    
\`\`\`
`
module.exports = message => {
    message.reply(helpMessage)

}
