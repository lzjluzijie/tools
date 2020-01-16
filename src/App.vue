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
                    <router-link id="navbar-json" class="navbar-item" to="/json">Json</router-link>
                    <router-link id="navbar-video" class="navbar-item" to="/video">Video</router-link>
                </div>

                <div class="navbar-end">
                    <a class="navbar-item" id="navbar-halulu" href="https://halu.lu/"
                       target="_blank">Halulu</a>

                    <a class="navbar-item" id="navbar-github" href="https://github.com/lzjluzijie/tools"
                       target="_blank">GitHub</a>
                </div>
            </div>
            </div>
        </nav>
        <section>
            <div class="container" style="padding-top: 2rem">
                <router-view></router-view>
            </div>
        </section>
        <footer class="footer" style="margin-top: 100px">
            <div class="content has-text-centered">
                <p>
                    <strong>Tools</strong> by <a href="https://halu.lu/" target="_blank">Halulu</a>. Automatically built by CircleCI. <a :href="github" target="_blank"> {{ gitShort }} </a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
    import git from '../git.json'

    export default {
        name: 'app',
        data() {
          return {
              gitHash: "",
              gitShort: ""
          }
        },
        mounted() {
            this.gitHash = git.commit
            this.gitShort = git.abbreviated_commit
        },
        computed: {
          github: function () {
                return "https://github.com/lzjluzijie/tools/commit/" + this.gitHash
          }
        }
    }
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
</style>
