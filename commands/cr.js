const Treasury = require('../instances/Treasury')

module.exports = async message => {
    const ecr = await Treasury.effective_collateral_ratio()/10000
    const tcr = await Treasury.target_collateral_ratio()/10000
    message.reply({
        embed: {
            fields:[{
                name: "ECR (Effective Collateral Ratio)",
                value: ecr.toFixed(2) + '%'
            }, {
                name: "TCR (Target Collateral Ratio)",
                value: tcr.toFixed(2) + '%'
            }],
        },
    })}
