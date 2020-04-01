<template>
    <div id="component_root">
        <div v-html="test"></div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "test",
        data() {
            return {
                test: ''
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
        }
    }
</script>

<style>
    /* 調整用 */
    .invisible, #header, .pankuzu, .skiptranslate, #footer, #toiawase, .pagetop, #right-side {
        display: none;
    }

    a[name] {
        color: #2c3e50;
    }
</style>
