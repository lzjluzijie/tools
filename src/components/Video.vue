<template>
    <div>
        <div class="columns">
            <div class="column is-6">
                <input id="input" class="input" type="text" placeholder="youtube video id here..." v-model="input" />
            </div>

            <div class="column is-6">
                <p class="content" v-if="showEmpty">
                    You need to enter youtube video id...
                </p>

                <div v-if="showTable">
                    <h3 class="title is-3"><a v-bind:href="url" target="_blank"> Youtube : {{ title }} </a></h3>

                    <vue-good-table
                            :columns="columns"
                            :groupOptions="{enabled: true}"
                            :rows="rows"
                            :sort-options="{enabled: true, initialSortBy: {field: 'itag', type: 'asc'}}">
                        <template slot="table-row" slot-scope="props">
                            <span v-if="props.column.field === 'url'">
                               <button class="clipboard button is-primary is-fullwidth" v-bind:data-clipboard-text="props.row[props.column.field]">Click to copy direct URL</button>
                             </span>
                            <span v-else>
                                {{props.formattedRow[props.column.field]}}
                            </span>
                        </template>
                    </vue-good-table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import ClipBorad from 'clipboard'
    import 'vue-good-table/dist/vue-good-table.css'
    import {VueGoodTable} from 'vue-good-table';

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
                if (v.mimeType.substr(0, 5) === "video") {
                    this.rows[0].children.push(v);
                } else {
                    this.rows[1].children.push(v);
                }

                console.log(v)
            },
            clearTable: function () {
                this.rows[0].children = [];
                this.rows[1].children = []
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
            }
        },
        computed: {
            url: function () {
                return "https://www.youtube.com/watch?v=" + this.input
            }
        }
    }
</script>
