<template>
    <div id="component_root">
        <p v-if="updated_at">
            {{ updated_at }} に、山形県ウェブサイトから情報を取得しています。
        </p>
        <div v-html="test"></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "test",
        data() {
            return {
                test: '',
                updated_at: null
            }
        },
        mounted() {
            axios({
                method: 'GET',
                url: '/test.html'
            }).then((response) => {
                const rare_data = response.data
                this.test = this.remove_unnecessary_text(rare_data)
                this.$nextTick(function () {
                    document.querySelectorAll('#component_root div p').forEach(function (element_p) {
                        let has_navigation = element_p.innerHTML.includes('知事から県民の皆様へのメッセージ')
                            && element_p.innerHTML.includes('新型コロナウイルス感染症の感染拡大を防止するための緊急のお願い')
                            && element_p.innerHTML.includes('山形県の新型コロナウイルス感染症の状況')
                        if (has_navigation) {
                            element_p.style.display = 'none'
                        }
                    })
                    document.querySelectorAll('ul').forEach(function (element_ul) {
                        if (element_ul.innerHTML.includes('3月6日、臨時の記者会見を行い、吉村知事から県民の皆様に対して、')) {
                            element_ul.style.display = 'none'
                            document.querySelectorAll('h3').forEach(function (element_h3) {
                                if (element_h3.innerHTML.includes('知事から県民の皆様へのメッセージ')) {
                                    element_h3.style.display = 'none'
                                }
                            })
                        }
                    })
                })
            })
            axios({
                method: 'GET',
                url: '/updated_at.txt'
            }).then((response) => {
                this.updated_at = response.data
            })
        },
        methods: {
            remove_unnecessary_text(text) {
                return text.replace(/href=\"\/ou\//g, 'href="/www.pref.yamagata.jp/ou/')
                    .replace(/src=\"\/ou\//g, 'src="/www.pref.yamagata.jp/ou/')
                    .replace(/color=\"#0066cc\"/g, '')
                    .replace(/<p>&nbsp;<\/p>/g, '')
                    .replace(/会見の動画はこちら/g, '会見の動画')
                    .replace(/となる新型コロナウイルスの感染者が確認されました。/g, '')
            }
        }
    }
</script>

<style lang="stylus">
    set_table_style()
        border 0

        tr
            border 1px solid #dfe2e5

        th
            display none

        td
            display block
            border 0

    // 調整用
    .invisible, #header, .pankuzu, .skiptranslate, #footer, #toiawase, .pagetop, #right-side
        display none

    h1
        margin-top 4rem

    h3
        margin-top 4rem

    a[name]
        color black

    table
        width 100% !important

    // 新型コロナ受診相談センター
    #parent-fieldname-text > table:nth-child(40)
        border 0

        tr
            border 1px solid #dfe2e5

        td, th
            display block
            border 0
            text-align center

        th:first-child
            display none

    // 新型コロナ相談窓口
    #parent-fieldname-text > table:nth-child(50)
        set_table_style()

        tr:nth-child(5)
            border-bottom 0

        tr:last-child
            background-color white
            border-top 0

    // 総合的な新型コロナ対策に関するご相談（県庁健康福祉企画課）
    #parent-fieldname-text > table:nth-child(61)
        set_table_style()
</style>
