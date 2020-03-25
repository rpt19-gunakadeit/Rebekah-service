const puppeteer = require('puppeteer');
var url = 'https://www.nike.com/t/air-max-90-mens-shoe-6n3vKB/CN8490-002';
(async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 926});
    await page.goto(url);
    await page.waitFor('input[name=search]');
    await page.type('input[name=search]', 'running shoes');
    await page.click('button[aria-label="Search"]');
    await page.waitForSelector('title');
    var urls = await page.evaluate(() => {
        var imgs = document.querySelectorAll('img');
        var arr = [];
        for(var i = 0; i < imgs.length; i++) {
            arr.push(imgs[i].src);
        }
        return arr;
    })
    console.log(urls);
})();