<template>
    <div id="app">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img alt="halulu" src="https://halu.lu/favicon-32x32.png"><strong>Tools</strong>
                </a>
            </div>

            <div id="navbar-menu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" id="navbar-hash" href="/hash.html">
                        Hash
                    </a>

                    <a class="navbar-item" id="navbar-encode" href="/encode.html">
                        Encode
                    </a>

                    <a class="navbar-item" id="navbar-link" href="/link.html">
                        Link
                    </a>
                </div>

                <div class="navbar-end">
                    <a class="navbar-item" id="navbar-todo" href="/todo.html">
                        TODO
                    </a>

                    <a class="navbar-item" id="navbar-halulu" href="https://halu.lu/"
                       target="_blank">Halulu</a>

                    <div class="navbar-item" id="navbar-github">
                        <a href="https://github.com/lzjluzijie/tools">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <section>
            <div class="container">
                <Hash></Hash>
            </div>
        </section>
    </div>
</template>

<script>
    import Hash from './components/Hash.vue'

    export default {
        name: 'app',
        components: {
            Hash
        }
    }
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
</style>