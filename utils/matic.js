const provider = require('../provider')
const {ethers} = require('ethers')
const ERC20_SIG = ethers.utils.id('Transfer(address,address,uint256)')
const getTokenSymbol = async tokenAddr => {
    try {
        const Token = new ethers.Contract(tokenAddr, ERC20ABI, provider)
        return Token.symbol()
    } catch (e) {
        return null
    }
}

const parseMaticTx = async (txh) =>{
    const receipt = await provider.getTransactionReceipt(txh)
    console.log(receipt)
    console.log(receipt.logs.map((log => [
        log.topics[0],
        log.topics[1],
        log.data
    ])))

}

const parseErc20Tx = async (txh) => {
    const receipt = await provider.getTransactionReceipt(txh)
    console.log(receipt)
    const transfers = receipt.logs.filter(
        t =>
            t.topics[0] ===
            /*transfer sig*/ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' &&
            t.topics[2] !== '0x0000000000000000000000000000000000000000000000000000000000000000',
    )

    for (const transfer of transfers) {
        const { topics } = transfer
        const amount = ethers.BigNumber.from(transfer.data)
        const [_, from, to] = topics
        console.log(
            from +
            ' => ' +
            to +
            '| ' +
            amount.div(1e15).div(1e3).toNumber() +
            ' ' +
            (await getTokenSymbol(receipt.to)),
        )
    }
}

module.exports = {
    parseErc20Tx,
    parseMaticTx,
    getTokenSymbol
}
