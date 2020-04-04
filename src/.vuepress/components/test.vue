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

</style>
