<template>
    <div id="app">
        <nav class="navbar is-info" role="navigation" aria-label="main navigation">
            <div class="container">
            <div class="navbar-brand">
                <router-link id="navbar-home" class="navbar-item" to="/home">
                    <strong>Tools</strong>
                </router-link>
            </div>

            <div id="navbar-menu" class="navbar-menu">
                <div class="navbar-start">
                    <router-link id="navbar-hash" class="navbar-item" to="/hash">Hash</router-link>
                    <router-link id="navbar-encode" class="navbar-item" to="/encode">Encode</router-link>
                    <router-link id="navbar-link" class="navbar-item" to="/link">Link</router-link>
                </div>

                <div class="navbar-end">
                    <a class="navbar-item" id="navbar-halulu" href="https://halu.lu/"
                       target="_blank">Halulu</a>

                    <a class="navbar-item" id="navbar-github" href="https://github.com/lzjluzijie/tools"
                       target="_blank">Github</a>
                </div>
            </div>
            </div>
        </nav>
        <section>
            <div class="container" style="padding-top: 2rem">
                <router-view></router-view>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
</style>