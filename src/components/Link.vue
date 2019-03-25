<template>
    <div id="link" class="columns">
        <div class="column is-6">
            <div class="control">
                <input class="input" type="text" v-model="sharingURL" placeholder="Sharing URL here">
            </div>

            <br>

            <div class="content control">
                <p id="directURL" class="content" v-bind:data-clipboard-text="directURL"
                   style="word-wrap:break-word">
                    Direct URL: {{ directURL }}
                </p>
            </div>

            <div id="examples" ref="examples" class="content" style="word-wrap: break-word;"></div>
        </div>

        <div class="column is-6">

            <div class="control">
                <input class="input" type="text" v-model="longURL" placeholder="Long URL here">
            </div>

            <br>

            <div class="content control">
                <p id="shortURL" class="content" v-bind:data-clipboard-text="shortURL" style="word-wrap:break-word">
                    Short URL: {{ shortURL }}
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import _ from 'lodash'
    import marked from 'marked'

    import md from '!raw-loader!../docs/link.md'

    export default {
        name: "Link",
        created: function () {
            this.debouncedGetWeiboShortURL = _.debounce(this.getWeiboShortURL, 500);
            this.debouncedGetBaiduShortURL = _.debounce(this.getBaiduShortURL, 500);
        },
        mounted: function () {
            // const md = window.atob("R2V0IGRpcmVjdCBkb3dubG9hZCBsaW5rIGZyb20gc2hhcmluZyBsaW5rLCBjdXJyZW50bHkgc3VwcG9ydCBPbmVEcml2ZSwgU2hhcmVQb2ludCwgYW5kIEdvb2dsZSBEcml2ZS4KCkhlcmUgYXJlIHNvbWUgZXhhbXBsZXMuCgp8IE5hbWUgICAgICAgICB8IFNoYXJpbmcgVVJMICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERpcmVjdCBVUkwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CnwgLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwKfCBPbmVEcml2ZSAgICAgfCBodHRwczovLzFkcnYubXMvdS9zIUFnbG1OejVwelJ0MW1nNmE3Y3EtR2hpLTBoMkQgICAgICAgICAgICAgfCBodHRwczovL2FwaS5vbmVkcml2ZS5jb20vdjEuMC9zaGFyZXMvdSFhSFIwY0hNNkx5OHhaSEoyTG0xekwzVXZjeUZCWjJ4dFRubzFjSHBTZERGdFp6WmhOMk54TFVkb2FTMHdhREpFL3Jvb3QvY29udGVudCB8CnwgU2hhcmVQb2ludCAgIHwgaHR0cHM6Ly9sempsdXppamllLW15LnNoYXJlcG9pbnQuY29tLzppOi9nL3BlcnNvbmFsLzZ0dV9sempsdXppamllX29ubWljcm9zb2Z0X2NvbS9FYmMtT1VEZlVlTkVoa082RGg1NTlVNEJrQ3NnWXg1N3lUalpXSjUwTEpsMXNnP2U9MERrejVKIHwgaHR0cHM6Ly9sempsdXppamllLW15LnNoYXJlcG9pbnQuY29tLzppOi9nL3BlcnNvbmFsLzZ0dV9sempsdXppamllX29ubWljcm9zb2Z0X2NvbS9FYmMtT1VEZlVlTkVoa082RGg1NTlVNEJrQ3NnWXg1N3lUalpXSjUwTEpsMXNnP2U9MERrejVKJmRvd25sb2FkPTEgfAp8IEdvb2dsZSBEcml2ZSB8IGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9vcGVuP2lkPTFRWFc3RkRqbGIzdUxza1VrWnhhWUp1NTVVUUk3U2hMMCB8IGh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS91Yz9leHBvcnQ9ZG93bmxvYWQmaWQ9MVFYVzdGRGpsYjN1THNrVWtaeGFZSnU1NVVRSTdTaEwwIHwK")
            this.$refs.examples.innerHTML = marked(md);
            this.$refs.examples.getElementsByTagName("table")[0].style.setProperty("table-layout", "fixed");
        },
        data() {
            return {
                sharingURL: '',
                longURL: '',
                shortURL: '',
            }
        },
        computed: {
            directURL: function () {
                try {
                    let sharingURL = this.sharingURL;
                    let url = new URL(sharingURL);
                    let host = url.host;

                    //SharePoint
                    if (host.slice(-14) === "sharepoint.com" || host.slice(-13) === "sharepoint.cn") {
                        url.searchParams.set("download", "1");
                        return url.toString()
                    }

                    //OneDrive
                    if (host === "1drv.ms" || host === "onedrive.live.com") {
                        return "https://api.onedrive.com/v1.0/shares/u!" + window.btoa(sharingURL).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') + "/root/content"
                    }

                    //Google Drive
                    if (host === "drive.google.com") {
                        let id = url.searchParams.get("id");
                        if (id != null) {
                            alert(id);
                            return "https://drive.google.com/uc?export=download&id=" + id
                        }

                        if (sharingURL.slice(0, 32) === "https://drive.google.com/file/d/") {
                            return "https://drive.google.com/uc?export=download&id=" + sharingURL.slice(32).split("/")[0]
                        }

                        return "google drive error, check the example"
                    }

                    //error
                    return "unknown url"
                } catch (e) {
                    return "invalid url"
                }
            }
        },
        watch: {
            longURL: function () {
                this.shortURL = "requesting...";
                this.debouncedGetBaiduShortURL()
            }
        },
        methods: {
            getWeiboShortURL: function () {
                try {
                    let longURL = this.longURL;
                    new URL(longURL);
                    axios.get('https://api.weibo.com/2/short_url/shorten.json', {
                        params: {
                            source: 569452181,
                            url_long: longURL,
                        }
                    })
                        .then(response => (this.shortURL = response.urls[0].url_short))
                        .catch(error => (this.shortURL = error))
                } catch (e) {
                    this.shortURL = "invalid url"
                }
            },
            getBaiduShortURL: function () {
                try {
                    let longURL = this.longURL;
                    new URL(longURL);
                    axios.post('https://dwz.cn/admin/v2/create', {
                        url: longURL,
                    }, {
                        headers: {
                            Token: '3b5ad7e2cf3334ec0122d39aea8a970c',
                        }
                    })
                        .then(response => (this.shortURL = response.data.ShortUrl))
                        .catch(error => (this.shortURL = error))
                } catch (e) {
                    this.shortURL = "invalid url"
                }
            }
        }
    }
</script>
