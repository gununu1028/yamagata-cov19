module.exports = {
    base: "/",
    dest: process.cwd() + "/dest/",
    title: "新型コロナウイルス感染症 山形県",
    description: "このページは有志によって作成されているものです。 最新の情報は山形県ウェブサイトをご覧ください。",
    locales: {
        "/": {
            lang: "ja"
        }
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-159032966-2'
            }
        ]
    ]
};
