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
                let replaced_data = rare_data.replace(/href=\"\/ou\//g, 'href="/www.pref.yamagata.jp/ou/')
                replaced_data = replaced_data.replace(/src=\"\/ou\//g, 'src="/www.pref.yamagata.jp/ou/')
                replaced_data = replaced_data.replace(/color=\"#0066cc\"/g, '')
                replaced_data = replaced_data.replace(/<p>&nbsp;<\/p>/g, '')
                replaced_data = replaced_data.replace(/会見の動画はこちら/g, '')
                replaced_data = replaced_data.replace(/<font color="#000000">（<\/font>/g, '')
                replaced_data = replaced_data.replace(/<font color="#000000">）<\/font>/g, '')
                replaced_data = replaced_data.replace(/（<a href="http:\/\/kaiken.pref.yamagata.jp\/data\/asx\/20200404kenfuku.asx"><\/a>）/g, '')
                replaced_data = replaced_data.replace(/となる新型コロナウイルスの感染者が確認されました。/g,  '')
                replaced_data = replaced_data.replace(/日、本県/g, '日：')
                this.test = replaced_data
                // this.$nextTick(function () {
                //     let first_table = document.querySelector('table')
                // })
            })
            axios({
                method: 'GET',
                url: '/updated_at.txt'
            }).then((response) => {
                this.updated_at = response.data
            })
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
