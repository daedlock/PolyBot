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
    
    !titan              fetch titan price from official price oracle
    !iron               fetch iron price from official price oracle
    !ecr                fetch collateral ratio (ECR & TCR)
    !alert              alert when a coin price goes off the threshold
    !alertstats         prints information about saved alerts
    !supportedcoins     a list of the supported coins
    !help               print this message
    
    
\`\`\`
`
module.exports = message => {
    message.author.send(helpMessage)
}
