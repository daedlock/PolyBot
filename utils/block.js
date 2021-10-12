const { matic } = require('../provider')
const moment = require('moment')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

const getFutureBlockTime = async (blockNumber) => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://polygonscan.com/block/countdown/${blockNumber}`);
        await page.waitFor('.js-cd-days')
        const el = await page.$('.pl-lg-4') //countdown screenshot
        const screenshot = await el.screenshot({path: `/tmp/${blockNumber}.png`} )
        const html = await  page.content()
        await browser.close();
        console.log(html)
        const $ = cheerio.load(html)
        const days = $('.js-cd-days').text()
        const hours = $('.js-cd-hours').text()
        const minutes = $('.js-cd-minutes').text()
        const seconds = $('.js-cd-seconds').text()
        return {
            days, hours, minutes, seconds, screenshot
        }
}

const getBlockTime = async (blockNumber) => {
   try {
       const { timestamp } = await matic.getBlock(+blockNumber)
       return moment(timestamp * 1000).format("LLLL")
   } catch (err) {
       return getFutureBlockTime(blockNumber)

   }

}

module.exports = {
    getBlockTime
}
