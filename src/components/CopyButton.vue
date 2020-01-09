<template>
    <button class="clipboard button is-primary" v-bind:data-clipboard-text="url">Click to copy</button>
</template>

<script>
    export default {
        name: "CopyButton",
        props: ["url"]
    }
</script>

<style scoped>

</style>
