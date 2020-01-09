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
                output: 'You need to enter youtube video id...'
            }
        },
        watch: {
            input: function () {
                let input = this.input

                if (input === "") {
                    return "You need to enter youtube video id..."
                }

                fetch('https://cors.halulu.workers.dev/?https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D' + input)
                    .then(response => {
                        console.log(response.ok)
                        response.text()
                            .then((data => {
                                //console.log(data)
                                let a = data.split('&')
                                for (let o of a) {
                                    //console.log(o)
                                    if (o.substr(0, 16) === "player_response=") {
                                        //console.log("yes")
                                        let va = decodeURIComponent(o.substr(16)).split(',')
                                        let p = JSON.parse(va)
                                        console.log(p)

                                        let streamingData = p.streamingData
                                        console.log(streamingData)

                                        for (let v of streamingData.adaptiveFormats) {
                                            console.log(v)

                                            if (v.itag === 299) {
                                                this.output = v.url
                                                return
                                            }
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
