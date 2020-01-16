<template>
    <div id="hash" class="columns">
        <div class="column is-2">
            <aside class="menu">
                <p class="menu-label">
                    SHA2
                </p>
                <ul class="menu-list">
                    <li v-for="algo in algos.sha2" :key="algo" v-on:click="hashName = algo"><a :class="{'is-active': hashName === algo}"> {{ algo }} </a></li>
                </ul>

                <p class="menu-label">
                    SHA3
                </p>
                <ul class="menu-list">
                    <li v-for="algo in algos.sha3" :key="algo" v-on:click="hashName = algo"><a :class="{'is-active': hashName === algo}"> {{ algo }} </a></li>
                </ul>

                <p class="menu-label">
                    Others
                </p>
                <ul class="menu-list">
                    <li v-for="algo in algos.others" :key="algo" v-on:click="hashName = algo"><a :class="{'is-active': hashName === algo}"> {{ algo }} </a></li>
                </ul>
            </aside>
        </div>

        <div class="column is-5" id="text-div">
            <h2 class="title is-2">Text</h2>

            <div class="field columns">
                <div class="content column">
                    <p>
                        Input below, click to copy the hash.
                    </p>
                </div>
            </div>

            <div class="field" id="textarea">
                <div class="control">
                        <textarea class="textarea" name="input" id="input" v-model="input"
                                  placeholder="input text here"></textarea>
                </div>
            </div>

            <div class="field has-addons" id="bits-div" v-if="hashName === 'shake128' || hashName === 'shake256'">
                <p class="control">
                    <a class="button">
                        Output bits
                    </a>
                </p>
                <div class="control">
                    <input class="input" type="text" v-model="bits" placeholder="output bits">
                </div>
            </div>

            <div class="content">
                <p id="output" ref="output" class="content clipboard" v-bind:data-clipboard-text="output"
                   style="word-wrap:break-word">
                    {{ hashName }}:
                    {{ output }}
                </p>
            </div>
        </div>
        <div class="column is-5" id="file-div">
            <h2 class="title is-2">File</h2>

            <div id="dropzone" class="title is-3"
                 style="position: relative; height: 200px;padding: 75px;border: 2px dashed;border-radius:5px;text-align:center;">
                Drop files here
                <input id="files" type="file" @change="fileChange($event)"
                       style="opacity: 0.0; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;"
                       multiple/>
            </div>

            <div id="fileHashes">
                <ul style="word-wrap:break-word">
                <li class="content hash-result clipboard" v-for="fileHash in fileHashes" :key="fileHash.id" v-bind:data-clipboard-text="fileHash.hash">
                {{ fileHash.hashName }} {{ fileHash.fileName }}:
                {{ fileHash.hash }}
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import ClipboardJS from 'clipboard';
    import {sha256, sha224} from 'js-sha256';
    import {sha512, sha384} from 'js-sha512';
    import {sha3_256, sha3_512, sha3_384, sha3_224, shake128, shake256} from 'js-sha3';
    import sha1 from 'js-sha1';
    import md4 from 'js-md4';
    import md5 from 'js-md5';
    import {crc32} from 'js-crc';
    import ripemd160 from 'crypto-js/ripemd160'

    export default {
        name: "Hash",
        data() {
            return {
                input: '',
                bits: 0,
                hashName: 'sha256',
                algos: {
                    'sha2': ['sha256', 'sha512', 'sha384', 'sha224'],
                    'sha3' : ['sha3-256', 'sha3-512', 'sha3-384', 'sha3-224', 'shake128', 'shake256'],
                    'others' : ['sha1', 'md4', 'md5', 'crc32', 'ripemd160']
                },
                fileHashes: []
            }
        },
        mounted: function () {
            new ClipboardJS('.clipboard');

            // file
            document.getElementById("dropzone").addEventListener("dragover", event => {
                event.stopPropagation();
                event.preventDefault();
                event.dataTransfer.dropEffect = "copy";
            });

            document.getElementById("dropzone").addEventListener("drop", event => {
                event.stopPropagation();
                event.preventDefault();

                let files = event.dataTransfer.files;
                for (var i = 0; i < files.length; i++) {
                    this.fileHash(files[i])
                }
            });
        },
        computed: {
            output: function () {
                return this.hash(this.input)
            }
        },
        methods: {
            hash: function (input) {
                let name = this.hashName;
                let bits = this.bits;

                let hash = "error!";

                switch (name) {
                    //sha2
                    case "sha256":
                        hash = sha256(input);
                        break;
                    case "sha512":
                        hash = sha512(input);
                        break;
                    case "sha384":
                        hash = sha384(input);
                        break;
                    case "sha224":
                        hash = sha224(input);
                        break;

                    //sha3
                    case "sha3-256":
                        hash = sha3_256(input);
                        break;
                    case "sha3-512":
                        hash = sha3_512(input);
                        break;
                    case "sha3-384":
                        hash = sha3_384(input);
                        break;
                    case "sha3-224":
                        hash = sha3_224(input);
                        break;
                    case "shake128":
                        hash = shake128(input, bits);
                        break;
                    case "shake256":
                        hash = shake256(input, bits);
                        break;

                    //others
                    case "sha1":
                        hash = sha1(input);
                        break;
                    case "md4":
                        hash = md4(input);
                        break;
                    case "md5":
                        hash = md5(input);
                        break;
                    case "crc32":
                        hash = crc32(input);
                        break;
                    case "ripemd160":
                        hash = ripemd160(input).toString();
                        break;
                }

                return hash
            },
            //click: function (event) {
                //watch this
            //    document.getElementById("files").value = "";
            //},
            fileChange: function (event) {
                let files = event.target.files;
                for (var i = 0; i < files.length; i++) {
                    this.fileHash(files[i])
                }
            },
            fileHash: function (file) {
                let reader = new FileReader();
                reader.addEventListener("loadend", e => {
                    this.fileHashes.push({
                        "fileName": file.name,
                        "hashName": this.hashName,
                        "hash": this.hash(e.target.result)
                    });
                });
                reader.readAsArrayBuffer(file);
            },
        }
    }
</script>

<style scoped>

</style>