<template>
    <aside class="sidebar">
        <ul class="sidebar-links">
            <li><a href="#kensa" class="sidebar-link">山形県の新型コロナウイルス感染症の状況</a></li>
            <li><a href="#soudan" class="sidebar-link">新型コロナウイルスの相談窓口</a></li>
            <li><a href="#gaiyou" class="sidebar-link">新型コロナウイルス感染症について</a></li>
            <li><a href="#kyoiku" class="sidebar-link">教育関係について</a></li>
            <li><a href="#kosodate" class="sidebar-link">子育て関係について</a></li>
            <li><a href="#kigyo" class="sidebar-link">企業関係について</a></li>
            <li><a href="#norinsuisan" class="sidebar-link">農林水産関係について</a></li>
            <li><a href="#shohi" class="sidebar-link">消費生活関係について</a></li>
            <li><a href="#event" class="sidebar-link">イベント等の中止・延期について</a></li>
            <li><a href="#shisetsu" class="sidebar-link">県施設の対応について</a></li>
            <li><a href="#taisakuhonbu" class="sidebar-link">新型コロナウイルス感染症対策本部等の会議開催状況について</a></li>
        </ul>
    </aside>
</template>

<script>
    import SidebarLinks from '@theme/components/SidebarLinks.vue'
    import NavLinks from '@theme/components/NavLinks.vue'

    export default {
        name: 'Sidebar',

        components: {SidebarLinks, NavLinks},

        props: ['items']
    }
</script>

<style lang="stylus">
    .sidebar
        background-color #f6f8fa

    a.sidebar-link
        color #209060

        &:hover
            color #333

    .sidebar
        ul
            padding 0
            margin 0
            list-style-type none

        a
            display inline-block

        .nav-links
            display none
            border-bottom 1px solid $borderColor
            padding 0.5rem 0 0.75rem 0

            a
                font-weight 600

            .nav-item, .repo-link
                display block
                line-height 1.25rem
                font-size 1.1em
                padding 0.5rem 0 0.5rem 1.5rem

        & > .sidebar-links
            padding 1.5rem 0

            & > li > a.sidebar-link
                font-size 1.1em
                line-height 1.7
                font-weight bold

            & > li:not(:first-child)
                margin-top .75rem

    @media (max-width: $MQMobile)
        .sidebar
            .nav-links
                display block

                .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
                    top calc(1rem - 2px)

            & > .sidebar-links
                padding 1rem 0
</style>
