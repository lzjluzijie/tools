<template>
    <div id="link" class="columns">
        <div class="column is-6">
            <div class="control">
                <input class="input" type="text" v-model="sharingURL" placeholder="Sharing URL here">
            </div>

            <br>

            <div class="content control">
                <p id="directURL" class="content clipboard" v-bind:data-clipboard-text="directURL"
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
                <p id="shortURL" class="content clipboard" v-bind:data-clipboard-text="shortURL"
                   style="word-wrap:break-word">
                    Short URL: {{ shortURL }}
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    import ClipboardJS from 'clipboard';
    import _ from 'lodash'
    import marked from 'marked'
    import md from '!raw-loader!../docs/link.md'
    export default {
        name: "Link",
        created: function () {
            this.debouncedGetWeiboShortURL = _.debounce(this.getWeiboShortURL, 500);
            // this.debouncedGetBaiduShortURL = _.debounce(this.getBaiduShortURL, 500);
        },
        mounted: function () {
            this.$refs.examples.innerHTML = marked(md);
            this.$refs.examples.getElementsByTagName("table")[0].style.setProperty("table-layout", "fixed");
            new ClipboardJS('.clipboard')
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
                let sharingURL = this.sharingURL;
                let url = null;
                try {
                    url = new URL(sharingURL);
                } catch (e) {
                    return "invalid url"
                }
                const host = url.host;
                //SharePoint
                if (host.slice(-14) === "sharepoint.com" || host.slice(-13) === "sharepoint.cn") {
                    const i = sharingURL.indexOf(":/g");
                    sharingURL = sharingURL.substring(0,i-3) + sharingURL.substring(i+3);
                    return (sharingURL.substring(0, sharingURL.lastIndexOf('/')) + "/_layouts/15/download.aspx?share=" + sharingURL.substring(sharingURL.lastIndexOf('/') + 1).split("?")[0])
                }
                //OneDrive
                if (host === "1drv.ms" || host === "onedrive.live.com") {
                    return "https://api.onedrive.com/v1.0/shares/u!" + window.btoa(sharingURL).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '') + "/root/content"
                }
                //Google Drive
                if (host === "drive.google.com") {
                    const id = url.searchParams.get("id");
                    if (id != null) {
                        return "https://drive.google.com/uc?export=download&id=" + id
                    }
                    if (sharingURL.slice(0, 32) === "https://drive.google.com/file/d/") {
                        return "https://drive.google.com/uc?export=download&id=" + sharingURL.slice(32).split("/")[0]
                    }
                    return "google drive error, check the example"
                }
                //error
                return "unknown url"
            }
        },
        watch: {
            longURL: function () {
                this.shortURL = "requesting...";
                this.debouncedGetWeiboShortURL()
            },
            directURL: function () {
                this.longURL = this.directURL;
            }
        },
        methods: {
            //todo 已失效
            getWeiboShortURL: function () {
                const longURL = this.longURL;
                try {
                    new URL(longURL);
                } catch (e) {
                    this.shortURL = "invalid url";
                    return
                }
                //jsonp
                const callbackName = `jsonpCB_${Date.now()}`;
                const url = `https://api.weibo.com/2/short_url/shorten.json?source=569452181&url_long=${encodeURIComponent(longURL)}&callback=${callbackName}`
                const node = document.createElement('script');
                node.src = url;
                window[callbackName] = result => {
                    delete window[callbackName];
                    document.body.removeChild(node);
                    if (result) {
                        this.shortURL = 'https' + result.data.urls[0].url_short.slice(4);
                    } else {
                        this.shortURL = "no data";
                    }
                };
                node.addEventListener('error', () => {
                    delete window[callbackName];
                    document.body.removeChild(node);
                    this.shortURL = "unable to load js";
                }, false);
                document.body.appendChild(node)
            },
            // getBaiduShortURL: function () {
            //     const longURL = this.longURL;
            //     try {
            //         new URL(longURL);
            //     } catch (e) {
            //         this.shortURL = "invalid url"
            //     }
            //     axios.post('https://dwz.cn/admin/v2/create', {
            //         url: longURL,
            //     }, {
            //         headers: {
            //             Token: '3b5ad7e2cf3334ec0122d39aea8a970c',
            //         }
            //     })
            //         .then(response => (this.shortURL = response.data.ShortUrl))
            //         .catch(error => (this.shortURL = error))
            // }
        }
    }
</script>
