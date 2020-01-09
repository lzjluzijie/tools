<template>
    <div>
        <div class="columns">
            <div class="column is-6">
                <textarea class="textarea" id="input" v-model="input"></textarea>
            </div>

            <div class="column is-6">
                <p class="content" v-if="showEmpty">
                    You need to enter youtube video id...
                </p>

                <vue-good-table
                        v-if="showTable"
                        :columns="columns"
                        :rows="rows"
                        :sort-options="{enabled: true, initialSortBy: {field: 'itag', type: 'asc'}}"
                />
            </div>
        </div>

    </div>
</template>

<script>
    import ClipBorad from 'clipboard'
    import 'vue-good-table/dist/vue-good-table.css'
    import { VueGoodTable } from 'vue-good-table';

    new ClipBorad(".clipboard");

    export default {
        name: "Video",
        components: {
            VueGoodTable,
        },
        data() {
            return {
                input: '',
                showEmpty: true,
                showTable: false,
                columns: [
                    {
                        label: 'itag',
                        field: 'itag',
                        type: 'number',
                    },
                    {
                        label: 'Size',
                        field: 'contentLength',
                        type: 'number',
                    },
                    {
                        label: 'URL',
                        field: 'url',
                    },
                ],
                rows: [],
            }
        },
        watch: {
            input: function () {
                let input = this.input

                if (input === "") {
                    this.showEmpty = true
                    this.showTable = false
                    return
                }

                this.showEmpty = false
                this.showTable = true

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
                                            this.rows.push(v)
                                            console.log(v)
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
