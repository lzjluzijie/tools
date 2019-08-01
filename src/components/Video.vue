<template>
    <div>
        <div class="columns">
            <div class="column">
                <textarea class="textarea" id="input" v-model="input"></textarea>
            </div>

            <div class="column">
                <textarea class="textarea" id="output" v-model="output" readonly></textarea>
            </div>
        </div>

        <button class="button clipboard" data-clipboard-target="#input">Copy input</button>

        <button class="button clipboard" data-clipboard-target="#output">Copy output</button>
    </div>
</template>

<script>
    import ClipBorad from 'clipboard'
    // import axios from 'axios'

    new ClipBorad(".clipboard");

    export default {
        name: "Json",
        data() {
            return {
                input: '',
                output: ''
            }
        },
        watch: {
            input: function () {
                let input = this.input

                fetch('https://cors.halulu.workers.dev/?https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D' + input)
                    .then(response => {
                        console.log(response.ok)
                        response.text()
                            .then((data => {
                                // console.log(data)
                                let a = data.split('&')
                                for (let o of a) {
                                    if (o.substr(0, 14) === "adaptive_fmts=") {
                                        let va = decodeURIComponent(o.substr(14)).split(',')
                                        for (let v of va) {
                                            console.log(v)
                                            let params = {}
                                            for (let param of v.split('&')) {
                                                let p = param.split('=')
                                                params[p[0]] = p[1]
                                            }

                                            if (params["itag"] === "299") {
                                                this.output = decodeURIComponent(params["url"])
                                                return
                                            }
                                            console.log(params)
                                        }

                                        return
                                    }
                                }
                            }))

                    })
                // .catch(error => (this.shortURL = error))

                return ''
            },
        }
    }
</script>
