const puppeteer = require("puppeteer");
const save = require("save-file");
const encoding = require("encoding-japanese");
const moment = require("moment");

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
        const utf8Text = encoding.convert(gettedBody, {
            to: "UTF8",
            from: "UNICODE",
            type: "string"
        });
        save(utf8Text, "src/.vuepress/public/test.html");

        let d = moment.utc().add(9, 'hours');
        const week_text = '日月火水木金土'[new Date().getDay()];
        const text = Buffer.from(d.format("YYYY年M月D日H時m分"));
        save(text, "src/.vuepress/public/updated_at.txt");
    } catch (e) {
        console.error(e);
    }
})();
