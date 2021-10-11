const CoinGecko = require('coingecko-api')
const CoinGeckoClient = new CoinGecko()
const parseDiscordMessageParams = require('./utils/parseDiscordMessageParams')
const formatPercentage = require('./utils/formatPercentage')

IsAwake = false

module.exports = async message => {
    let [coin] = parseDiscordMessageParams(message.cleanContent)
    if (!coin) {
        return message.reply('Incorrect command syntax. Please use `!gecko <coin-symbol>`')
    }

    coin = coin.toLowerCase()

    if(!IsAwake){
    // Fetch coin list if this is the first time the !gecko command has been invoked
        CoinGeckoList = await CoinGeckoClient.coins.list();
        console.info("Initialized CoinList")
        // Set flag to indicate that the !gecko command has been invoked once        
        IsAwake = true
    }
    
    listedCoin = CoinGeckoList.data.find(
        each => each.symbol === coin || each.id === coin || each.name === coin,
    )
    
    if (!listedCoin) {
        
        console.info("Coin Not found Refreshing CoinList")

        // If the coin isn't found, refresh the database first, and look again otherwise, return an error
        CoinGeckoList = await CoinGeckoClient.coins.list();
        
        listedCoin = CoinGeckoList.data.find(
            each => each.symbol === coin || each.id === coin || each.name === coin,
        )

        if (!listedCoin) {
            console.info("Coin not found after CoinList refresh")
            return message.reply("The Coin isn't listed on Coingecko")
        }
    }

    const { data } = await await CoinGeckoClient.coins.fetch(listedCoin.id, {
        market_data: true,
    })

    let fields = [
        {
            name: 'Price',
            value: `**$${data.market_data.current_price.usd}**`,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Market Cap',
            value: `**$${data.market_data.market_cap.usd}**`,
            inline: true,
        },
        {
            name: 'Total Volume',
            value: `**$${data.market_data.total_volume.usd}**`,
            inline: true,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'All Time High',
            value: `$${data.market_data.ath.usd}   ( **${formatPercentage(
                data.market_data.ath_change_percentage.usd,
            )}** )`,
            inline: true,
        },
        {
            name: 'All Time Low',
            value: `$${data.market_data.atl.usd}   ( **${formatPercentage(
                data.market_data.atl_change_percentage.usd,
            )}** )`,
            inline: true,
        },
        {
            name: '% Change 1h / 24h / 7days',
            value: `${formatPercentage(
                data.market_data.price_change_percentage_1h_in_currency.usd,
            )} / ${formatPercentage(
                data.market_data.price_change_percentage_24h_in_currency.usd,
            )} / ${formatPercentage(data.market_data.price_change_percentage_7d_in_currency.usd)}`,
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Home Page',
            value: data.links.homepage[0],
        },
    ]

    /**
     * @dev See whether this information is required or not
     const blockchainLinks = {
        name: 'Blockchain Links',
        value: '',
    }
    if (data.links.blockchain_site.length) {
        blockchainLinks.value = data.links.blockchain_site.map(each => `${each}\n`)
        fields = [...fields, blockchainLinks]
    }
     */

    const platforms = {
        name: 'Platforms',
        value: '',
    }
    const platformList = Object.keys(data.platforms).filter(each => each.length)
    if (platformList.length) {
        platforms.value = platformList.map(each => `**${each}** - ${data.platforms[each]}\n`)
        fields = [
            ...fields,
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            platforms,
        ]
    }

    message.reply({
        embed: {
            color: 0x0099ff,
            title: listedCoin.name.toUpperCase(),
            thumbnail: { url: data.image.large },
            fields,
            footer: {
                text: 'Powered by Coingecko',
            },
        },
    })
}
// var fs = require('fs');

// if(!IsAwake){
//     // Fetch coin list if this is the first time the !gecko command has been invoked
//         CoinData = await CoinGeckoClient.coins.list();
        
//         // fs.writeFile("/tmp/coingecko.json", CoinData.data, function(err) {
//         //     if(err) {
//         //         console.log(err);
//         //     } else {
//         //         console.log("The file /tmp/coingecko.json was saved!");                
//         //     }
//         // })        
        
//         // Set flag to indicate that the !gecko command has been invoked once        
//         IsAwake = true
//     }
