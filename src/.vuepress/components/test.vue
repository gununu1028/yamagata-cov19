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
                url: '/test.html',
            }).then((response) => {
                this.test = response.data
            })
        }
    }
</script>

<style>
    .invisible, #header, .pankuzu {
        display: none;
    }
</style>
