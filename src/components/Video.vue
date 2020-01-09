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

                <div v-if="showTable">
                    <h3 class="title is-3"> {{ title }} </h3>

                    <vue-good-table
                            :columns="columns"
                            :groupOptions="{enabled: true}"
                            :rows="rows"
                            :sort-options="{enabled: true, initialSortBy: {field: 'itag', type: 'asc'}}"
                    />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import ClipBorad from 'clipboard'
    import 'vue-good-table/dist/vue-good-table.css'
    import {VueGoodTable} from 'vue-good-table';
    import CopyButton from "./CopyButton";

    let copyButton = Vue.extend(CopyButton)
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
                        html: true,
                        formatFn: this.formatCopyButton,
                    },
                ],
                rows: [
                    {
                        mode: "span",
                        label: "Video",
                        html: false,
                        children: [],
                    },
                    {
                        mode: "span",
                        label: "Audio",
                        html: false,
                        children: [],
                    }
                ],
                title: ""
            }
        },
        methods: {
            addTable: function (v) {
                if (v.mimeType.substr(5) === "video") {
                    this.rows[0].children.push(v);
                    console.log(v)
                } else {
                    this.rows[1].children.push(v);
                    console.log(v)
                }
            },
            clearTable: function () {
                this.rows[0].children = [];
                this.rows[1].children = []
            },
            formatCopyButton: function (v) {
                let b = new copyButton({
                    propsData: { url: v.url }
                })
                b.$mount()
                return b
            }
        },
        watch: {
            input: function () {
                let input = this.input;

                if (input === "") {
                    this.showEmpty = true;
                    this.showTable = false;
                    return
                }

                this.showEmpty = false;
                this.showTable = true;

                this.clearTable();

                fetch('https://cors.halulu.workers.dev/?https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D' + input)
                    .then(response => {
                        console.log(response.ok);
                        response.text()
                            .then((data => {
                                //console.log(data)
                                let a = data.split('&');
                                for (let o of a) {
                                    //console.log(o)
                                    if (o.substr(0, 16) === "player_response=") {
                                        let va = decodeURIComponent(o.substr(16)).split(',');
                                        let p = JSON.parse(va);
                                        console.log(p);

                                        this.title = p.videoDetails.title;

                                        let streamingData = p.streamingData;
                                        console.log(streamingData);

                                        for (let v of streamingData.formats) {
                                            this.addTable(v)
                                        }

                                        for (let v of streamingData.adaptiveFormats) {
                                            this.addTable(v)
                                        }

                                        return
                                    }
                                }
                            }))

                    });
                // .catch(error => (this.shortURL = error))

                return ''
            },
        }
    }
</script>
