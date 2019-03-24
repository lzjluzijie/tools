<template>
    <div id="Home">
        <div>
            <div id="content" ref="content" class="content" style="word-wrap: break-word;"></div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'
    import md from '!raw-loader!../../README.md'

    export default {
        name: "Home",
        mounted: function () {
            this.$refs.content.innerHTML = marked(md);
        },
    }
</script>

<style scoped>

</style>