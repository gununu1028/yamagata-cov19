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
        const d = new Date();
        const week_text = '日月火水木金土'[new Date().getDay()];
        const text = Buffer.from(`${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日${week_text}曜日${d.getHours()}時${d.getMinutes()}分`);
        save(text, "src/.vuepress/public/updated_at.txt");
    } catch (e) {
        console.error(e);
    }
})();
