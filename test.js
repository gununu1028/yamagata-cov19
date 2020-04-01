const puppeteer = require("puppeteer");
const save = require("save-file");
const encoding = require("encoding-japanese");

async function getHtml(page, url) {
    await page.goto(url);
    return await page.evaluate(() => document.querySelector("body").innerHTML);
}

!(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const gettedBody = await getHtml(
            page,
            'http://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html'
        );
        browser.close();
        const sjisText = encoding.convert(gettedBody, {
            to: "SJIS",
            from: "UNICODE",
            type: "string"
        });
        const utf8Test = encoding.convert(sjisText, {
            to: "UTF8",
            from: "SJIS",
            type: "string"
        });
        save(utf8Test, "src/.vuepress/public/test.html");
    } catch (e) {
        console.error(e);
    }
})();
