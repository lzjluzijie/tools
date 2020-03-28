<template>
    <div>
        <div class="columns">
            <div class="column is-6">
                <input id="input" class="input" type="text" placeholder="youtube video id here..." v-model="input" />
            </div>

            <div class="column is-6">
                <p class="content" v-if="!id">
                    You need to enter youtube video id...
                </p>

                <div v-if="id">
                    <h3 class="title is-3"><a v-bind:href="url" target="_blank"> Youtube : {{ title }} </a></h3>
                    <h4 class="title is-4"> Length : {{  new Date(1000 * length).toISOString().substr(11, 8) }} </h4>
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
                length: null,
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
                // console.log(v)
            },
            clearTable: function () {
                this.rows[0].children = [];
                this.rows[1].children = []
            },
            youtubeURL: function (url) {
                // eslint-disable-next-line no-useless-escape
                const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                const match = url.match(regExp);
                return (match&&match[7].length === 11)? match[7] : false;
            }
        },
        watch: {
            id: function () {
                const id = this.id

                this.clearTable()

                //todo api似乎更新了
                fetch('https://cors.halulu.workers.dev/?https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D' + id)
                    .then(response => {
                        //console.log(response.ok);
                        response.text()
                            .then((data => {
                                //console.log(data)
                                for (const o of data.split('&')) {
                                    //console.log(o)
                                    if (o.substr(0, 16) === "player_response=") {
                                        const p = JSON.parse(decodeURIComponent(o.substr(16)).split(','));
                                        // console.log(p);
                                        const streamingData = p.streamingData;
                                        // console.log(streamingData);
                                        for (const v of streamingData.formats) {
                                            this.addTable(v)
                                        }
                                        for (const v of streamingData.adaptiveFormats) {
                                            this.addTable(v)
                                        }
                                        this.title = p.videoDetails.title;
                                        this.length = p.videoDetails.lengthSeconds
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
            id : function () {
                return this.youtubeURL(this.input)? this.youtubeURL(this.input) : this.input
            },
            url: function () {
                return "https://www.youtube.com/watch?v=" + this.id
            }
        }
    }
</script>