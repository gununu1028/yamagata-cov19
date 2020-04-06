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
                replaced_data = replaced_data.replace(/左に同じ/g, '上に同じ')
                this.test = replaced_data
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
    // 調整用
    .invisible, #header, .pankuzu, .skiptranslate, #footer, #toiawase, .pagetop, #right-side
        display none

    a[name]
        color black

    table
        width 100% !important

    // 「新型コロナ受診相談センター」の役割と連絡先
    #parent-fieldname-text > table:nth-child(50)
        border 0

        tr
            border 1px solid #dfe2e5

        th
            display none

        td
            display block
            border 0

        tr:nth-child(5)
            border-bottom 0

        tr:last-child
            background-color white
            border-top 0


    // 総合的な新型コロナ対策に関するご相談（県庁健康福祉企画課）
    #parent-fieldname-text > table:nth-child(61)
        th
            display none

        tr
            border 1px solid #dfe2e5

        td
            display block

        td:nth-of-type(1):before
            content "担当："

        td:nth-of-type(2):before
            content "電話（平日の日中）："

        td:nth-of-type(3):before
            content "電話（休日や時間外）："

</style>
