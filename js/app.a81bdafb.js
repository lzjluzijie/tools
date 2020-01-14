(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-home",to:"/home"}},[a("strong",[t._v("Tools")])])],1),a("div",{staticClass:"navbar-menu",attrs:{id:"navbar-menu"}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-hash",to:"/hash"}},[t._v("Hash")]),a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-encode",to:"/encode"}},[t._v("Encode")]),a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-link",to:"/link"}},[t._v("Link")]),a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-json",to:"/json"}},[t._v("Json")]),a("router-link",{staticClass:"navbar-item",attrs:{id:"navbar-video",to:"/video"}},[t._v("Video")])],1),t._m(0)])])]),a("section",[a("div",{staticClass:"container",staticStyle:{"padding-top":"2rem"}},[a("router-view")],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item",attrs:{id:"navbar-halulu",href:"https://halu.lu/",target:"_blank"}},[t._v("Halulu")]),a("a",{staticClass:"navbar-item",attrs:{id:"navbar-github",href:"https://github.com/lzjluzijie/tools",target:"_blank"}},[t._v("GitHub")])])}],r={name:"app"},c=r,l=(a("034f"),a("2877")),d=Object(l["a"])(c,i,o,!1,null,null,null),u=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("div",[a("div",{ref:"content",staticClass:"content",staticStyle:{"word-wrap":"break-word"},attrs:{id:"content"}})])])},p=[],m=a("e0c1"),v=a.n(m),b="# tools\n\nhttps://tools.halu.lu/\n\n[![CircleCI](https://circleci.com/gh/lzjluzijie/tools.svg?style=svg)](https://circleci.com/gh/lzjluzijie/tools)\n\n## Hash\n\n- SHA256\n- SHA512\n- SHA384\n- SHA224\n- SHA3-256\n- SHA3-512\n- SHA3-384\n- SHA3-224\n- Shake128\n- Shake256\n- SHA1\n- MD5\n- CRC32\n- RIPEMD-160\n\n## Encode\n\n- Base64\n- Base64 URL\n- Base58\n- Base36\n- Base32\n- URL Encoding\n- hex\n\n## Link\n\n- OneDrive & SharePoint\n- Google Drive\n\n- https://t.cn/\n- https://dwz.cn/\n\n## JSON\n\n- To do\n\n## Youtube\n\n- To do\n\n",f={name:"Home",mounted:function(){this.$refs.content.innerHTML=v()(b)}},g=f,C=Object(l["a"])(g,h,p,!1,null,"97e6f468",null),k=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns",attrs:{id:"hash"}},[a("div",{staticClass:"column is-2"},[a("aside",{staticClass:"menu"},[a("p",{staticClass:"menu-label"},[t._v(" SHA2 ")]),a("ul",{staticClass:"menu-list"},[a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name is-active",attrs:{"data-hash-name":"sha256"}},[t._v("SHA256")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha512"}},[t._v("SHA512")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha384"}},[t._v("SHA384")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha224"}},[t._v("SHA224")])])]),a("p",{staticClass:"menu-label"},[t._v(" SHA3 ")]),a("ul",{staticClass:"menu-list"},[a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha3-256"}},[t._v("SHA3-256")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha3-512"}},[t._v("SHA3-512")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha3-384"}},[t._v("SHA3-384")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha3-224"}},[t._v("SHA3-224")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"shake128"}},[t._v("Shake128")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"shake256"}},[t._v("Shake256")])])]),a("p",{staticClass:"menu-label"},[t._v(" Others ")]),a("ul",{staticClass:"menu-list"},[a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"sha1"}},[t._v("SHA1")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"md5"}},[t._v("MD5")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"crc32"}},[t._v("CRC32")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"hash-name",attrs:{"data-hash-name":"ripemd160"}},[t._v("RIPEMD-160")])])])])]),a("div",{staticClass:"column is-5",attrs:{id:"text-div"}},[a("h2",{staticClass:"title is-2"},[t._v("Text")]),t._m(0),a("div",{staticClass:"field",attrs:{id:"textarea"}},[a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"textarea",attrs:{name:"input",id:"input",placeholder:"input text here"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])]),t.showBits?a("div",{staticClass:"field has-addons",attrs:{id:"bits-div"}},[t._m(1),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bits,expression:"bits"}],staticClass:"input",attrs:{type:"text",placeholder:"output bits"},domProps:{value:t.bits},on:{input:function(e){e.target.composing||(t.bits=e.target.value)}}})])]):t._e(),a("div",{staticClass:"content"},[a("p",{ref:"output",staticClass:"content clipboard",staticStyle:{"word-wrap":"break-word"},attrs:{id:"output","data-clipboard-text":t.output}},[t._v(" "+t._s(t.hashName)+": "+t._s(t.output)+" ")])])]),a("div",{staticClass:"column is-5",attrs:{id:"file-div"}},[a("h2",{staticClass:"title is-2"},[t._v("File")]),a("div",{staticClass:"title is-3",staticStyle:{position:"relative",height:"200px",padding:"75px",border:"2px dashed","border-radius":"5px","text-align":"center"},attrs:{id:"dropzone"}},[t._v(" Drop files here "),a("input",{staticStyle:{opacity:"0.0",position:"absolute",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%"},attrs:{id:"files",type:"file",multiple:""},on:{change:function(e){return t.fileChange(e)}}})]),a("div",{attrs:{id:"fileHashes"}},[a("ul",{staticStyle:{"word-wrap":"break-word"}},t._l(t.fileHashes,(function(e){return a("li",{key:e.id,staticClass:"content hash-result clipboard",attrs:{"data-clipboard-text":e.hash}},[t._v(" "+t._s(e.hashName)+" "+t._s(e.fileName)+": "+t._s(e.hash)+" ")])})),0)])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"field columns"},[a("div",{staticClass:"content column"},[a("p",[t._v(" Input below, click to copy the hash. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"control"},[a("a",{staticClass:"button"},[t._v(" Output bits ")])])}],y=(a("b0c0"),a("d3b7"),a("25f0"),a("b311")),x=a.n(y),L=a("6c27"),S=a("ccc2"),U=a("1c55"),R=a("6199"),j=a.n(R),O=a("8237"),H=a.n(O),E=a("938d"),N=a("10b7"),D=a.n(N),B={name:"Hash",data:function(){return{input:"",bits:0,hashName:"sha256",showBits:!1,fileHashes:[]}},mounted:function(){var t=this;new x.a(".clipboard"),document.getElementById("dropzone").addEventListener("dragover",(function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"})),document.getElementById("dropzone").addEventListener("drop",(function(e){e.stopPropagation(),e.preventDefault();for(var a=e.dataTransfer.files,s=0;s<a.length;s++)t.fileHash(a[s])}))},computed:{output:function(){return this.hash(this.input)}},methods:{hash:function(t){var e=this.hashName,a=this.bits,s="error!";switch(e){case"sha256":s=Object(L["sha256"])(t);break;case"sha512":s=Object(S["sha512"])(t);break;case"sha384":s=Object(S["sha384"])(t);break;case"sha224":s=Object(L["sha224"])(t);break;case"sha3-256":s=Object(U["sha3_256"])(t);break;case"sha3-512":s=Object(U["sha3_512"])(t);break;case"sha3-384":s=Object(U["sha3_384"])(t);break;case"sha3-224":s=Object(U["sha3_224"])(t);break;case"shake128":s=Object(U["shake128"])(t,a);break;case"shake256":s=Object(U["shake256"])(t,a);break;case"sha1":s=j()(t);break;case"md5":s=H()(t);break;case"crc32":s=Object(E["crc32"])(t);break;case"ripemd160":s=D()(t).toString();break}return s},click:function(t){document.getElementById("files").value="";for(var e=document.getElementsByClassName("hash-name"),a=0;a<e.length;a++)e[a].classList.remove("is-active");t.target.classList.add("is-active");var s=t.target.getAttribute("data-hash-name");"shake128"===s?(this.bits=256,this.showBits=!0):"shake256"===s?(this.bits=512,this.showBits=!0):this.showBits=!1,this.hashName=s},fileChange:function(t){for(var e=t.target.files,a=0;a<e.length;a++)this.fileHash(e[a])},fileHash:function(t){var e=this,a=new FileReader;a.addEventListener("loadend",(function(a){e.fileHashes.push({fileName:t.name,hashName:e.hashName,hash:e.hash(a.target.result)})})),a.readAsArrayBuffer(t)}}},A=B,z=Object(l["a"])(A,w,_,!1,null,"678c7874",null),P=z.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"encode"}},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2"},["encode"===t.mode?a("h2",{staticClass:"title is-2",attrs:{id:"encode-title"}},[t._v("Encode")]):a("h2",{staticClass:"title is-2",attrs:{id:"decode-title"}},[t._v("Decode")])]),a("div",{staticClass:"column is-10",staticStyle:{"text-align":"center"}},["encode"===t.mode?a("div",{attrs:{id:"encode-arrow"},on:{click:function(e){return t.change(!0)}}},[a("h2",{staticClass:"subtitle is-2",staticStyle:{display:"inline"}},[t._v("raw→enc")])]):a("div",{attrs:{id:"decode-arrow"},on:{click:function(e){return t.change(!1)}}},[a("h2",{staticClass:"subtitle is-2",staticStyle:{display:"inline"}},[t._v("raw←enc")])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-2"},[a("aside",{staticClass:"menu"},[a("ul",{staticClass:"menu-list"},[a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name is-active",attrs:{"data-encode-name":"base64"}},[t._v("Base64")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"base64url"}},[t._v("Base64 URL")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"base58"}},[t._v("Base58")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"base36"}},[t._v("Base36")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"base32"}},[t._v("Base32")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"urlencode"}},[t._v("URL Encoding")])]),a("li",{on:{click:t.click}},[a("a",{staticClass:"encode-name",attrs:{"data-encode-name":"hex"}},[t._v("hex")])])])])]),a("div",{staticClass:"column is-5"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.raw,expression:"raw"}],staticClass:"textarea",attrs:{id:"raw",readonly:"decode"===t.mode},domProps:{value:t.raw},on:{input:function(e){e.target.composing||(t.raw=e.target.value)}}})]),a("div",{staticClass:"column is-5"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.enc,expression:"enc"}],staticClass:"textarea",attrs:{id:"enc",readonly:"encode"===t.mode},domProps:{value:t.enc},on:{input:function(e){e.target.composing||(t.enc=e.target.value)}}})])])])},I=[],J=(a("a15b"),a("a9e3"),a("e25e"),a("ac1f"),a("5319"),a("7441")),$=a("2377"),F=a.n($),M={name:"Encode",data:function(){return{raw:"",encodeName:"base64",mode:"encode"}},computed:{enc:{get:function(){var t=this.raw,e=this.encodeName,a="error!";switch(e){case"base64":a=window.btoa(t);break;case"base64url":a=window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");break;case"base58":a=J["encode"](t,58);break;case"base36":a=J["encode"](t,36);break;case"base32":a=F.a.encode(t);break;case"urlencode":a=encodeURIComponent(t);break;case"hex":a=this.hexEncode(t);break}return a},set:function(t){var e=this.encodeName,a="error!";switch(e){case"base64":a=window.atob(t);break;case"base64url":a=window.atob(t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""));break;case"base58":a=J["decode"](t,58);break;case"base36":a=J["decode"](t,36);break;case"base32":a=F.a.decode(t);break;case"urlencode":a=decodeURIComponent(t);break;case"hex":a=this.hexDecode(t);break}return this.raw=a,a}}},methods:{click:function(t){for(var e=document.getElementsByClassName("encode-name"),a=0;a<e.length;a++)e[a].classList.remove("is-active");t.target.classList.add("is-active");var s=t.target.getAttribute("data-encode-name");this.encodeName=s,this.change(!1)},change:function(t){this.mode=t?"decode":"encode"},hexEncode:function(t){for(var e=[],a=0,s=t.length;a<s;a++){var n=Number(t.charCodeAt(a)).toString(16);e.push(n)}return e.join("")},hexDecode:function(t){for(var e=t.toString(),a="",s=0;s<e.length;s+=2)a+=String.fromCharCode(parseInt(e.substr(s,2),16));return a}}},G=M,W=Object(l["a"])(G,T,I,!1,null,null,null),Y=W.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns",attrs:{id:"link"}},[a("div",{staticClass:"column is-6"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.sharingURL,expression:"sharingURL"}],staticClass:"input",attrs:{type:"text",placeholder:"Sharing URL here"},domProps:{value:t.sharingURL},on:{input:function(e){e.target.composing||(t.sharingURL=e.target.value)}}})]),a("br"),a("div",{staticClass:"content control"},[a("p",{staticClass:"content clipboard",staticStyle:{"word-wrap":"break-word"},attrs:{id:"directURL","data-clipboard-text":t.directURL}},[t._v(" Direct URL: "+t._s(t.directURL)+" ")])]),a("div",{ref:"examples",staticClass:"content",staticStyle:{"word-wrap":"break-word"},attrs:{id:"examples"}})]),a("div",{staticClass:"column is-6"},[a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.longURL,expression:"longURL"}],staticClass:"input",attrs:{type:"text",placeholder:"Long URL here"},domProps:{value:t.longURL},on:{input:function(e){e.target.composing||(t.longURL=e.target.value)}}})]),a("br"),a("div",{staticClass:"content control"},[a("p",{staticClass:"content clipboard",staticStyle:{"word-wrap":"break-word"},attrs:{id:"shortURL","data-clipboard-text":t.shortURL}},[t._v(" Short URL: "+t._s(t.shortURL)+" ")])])])])},Q=[],V=(a("99af"),a("c975"),a("baa5"),a("fb6a"),a("3ca3"),a("1276"),a("ddb0"),a("2b3d"),a("bc3a")),q=a.n(V),X=a("2ef0"),K=a.n(X),tt="Get direct download link from sharing link, currently support OneDrive, SharePoint, and Google Drive.\n\nHere are some examples.\n\n| Name         | Sharing URL                                                  | Direct URL                                                   |\n| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\n| OneDrive     | https://1drv.ms/u/s!AglmNz5pzRt1mg6a7cq-Ghi-0h2D             | https://api.onedrive.com/v1.0/shares/u!aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBZ2xtTno1cHpSdDFtZzZhN2NxLUdoaS0waDJE/root/content |\n| SharePoint   | https://lzjluzijie-my.sharepoint.com/:i:/g/personal/6tu_lzjluzijie_onmicrosoft_com/Ebc-OUDfUeNEhkO6Dh559U4BkCsgYx57yTjZWJ50LJl1sg?e=0Dkz5J | https://lzjluzijie-my.sharepoint.com/personal/6tu_lzjluzijie_onmicrosoft_com/_layouts/15/download.aspx?share=Ebc-OUDfUeNEhkO6Dh559U4BkCsgYx57yTjZWJ50LJl1sg |\n| Google Drive | https://drive.google.com/open?id=1QXW7FDjlb3uLskUkZxaYJu55UQI7ShL0 | https://drive.google.com/uc?export=download&id=1QXW7FDjlb3uLskUkZxaYJu55UQI7ShL0 |\n",et={name:"Link",created:function(){this.debouncedGetWeiboShortURL=K.a.debounce(this.getWeiboShortURL,500),this.debouncedGetBaiduShortURL=K.a.debounce(this.getBaiduShortURL,500)},mounted:function(){this.$refs.examples.innerHTML=v()(tt),this.$refs.examples.getElementsByTagName("table")[0].style.setProperty("table-layout","fixed"),new x.a(".clipboard")},data:function(){return{sharingURL:"",longURL:"",shortURL:""}},computed:{directURL:function(){var t=this.sharingURL,e=null;try{e=new URL(t)}catch(i){return"invalid url"}var a=e.host;if("sharepoint.com"===a.slice(-14)||"sharepoint.cn"===a.slice(-13)){var s=t.indexOf(":/g");return t=t.substring(0,s-3)+t.substring(s+3),t.substring(0,t.lastIndexOf("/"))+"/_layouts/15/download.aspx?share="+t.substring(t.lastIndexOf("/")+1).split("?")[0]}if("1drv.ms"===a||"onedrive.live.com"===a)return"https://api.onedrive.com/v1.0/shares/u!"+window.btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")+"/root/content";if("drive.google.com"===a){var n=e.searchParams.get("id");return null!=n?"https://drive.google.com/uc?export=download&id="+n:"https://drive.google.com/file/d/"===t.slice(0,32)?"https://drive.google.com/uc?export=download&id="+t.slice(32).split("/")[0]:"google drive error, check the example"}return"unknown url"}},watch:{longURL:function(){this.shortURL="requesting...",this.debouncedGetWeiboShortURL()},directURL:function(){this.longURL=this.directURL}},methods:{getWeiboShortURL:function(){var t=this,e=this.longURL;try{new URL(e)}catch(i){return void(this.shortURL="invalid url")}var a="jsonpCB_".concat(Date.now()),s="https://api.weibo.com/2/short_url/shorten.json?source=569452181&url_long=".concat(encodeURIComponent(e),"&callback=").concat(a),n=document.createElement("script");n.src=s,window[a]=function(e){delete window[a],document.body.removeChild(n),t.shortURL=e?"https"+e.data.urls[0].url_short.slice(4):"no data"},n.addEventListener("error",(function(){delete window[a],document.body.removeChild(n),t.shortURL="unable to load js"}),!1),document.body.appendChild(n)},getBaiduShortURL:function(){var t=this,e=this.longURL;try{new URL(e)}catch(a){this.shortURL="invalid url"}q.a.post("https://dwz.cn/admin/v2/create",{url:e},{headers:{Token:"3b5ad7e2cf3334ec0122d39aea8a970c"}}).then((function(e){return t.shortURL=e.data.ShortUrl})).catch((function(e){return t.shortURL=e}))}}},at=et,st=Object(l["a"])(at,Z,Q,!1,null,null,null),nt=st.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"textarea",attrs:{id:"input"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),a("div",{staticClass:"column"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.output,expression:"output"}],staticClass:"textarea",attrs:{id:"output",readonly:""},domProps:{value:t.output},on:{input:function(e){e.target.composing||(t.output=e.target.value)}}})])]),a("button",{staticClass:"button clipboard",attrs:{"data-clipboard-target":"#input"}},[t._v("Copy input")]),a("button",{staticClass:"button clipboard",attrs:{"data-clipboard-target":"#output"}},[t._v("Copy output")])])},ot=[];new x.a(".clipboard");var rt={name:"Json",data:function(){return{input:""}},computed:{output:function(){var t=this.input;if(""===t)return"You need to enter something...";var e={};try{e=JSON.parse(t)}catch(a){return window.console.log(a),a.toString()}return JSON.stringify(e,null,4)}}},ct=rt,lt=Object(l["a"])(ct,it,ot,!1,null,null,null),dt=lt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"input",attrs:{id:"input",type:"text",placeholder:"youtube video id here..."},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),a("div",{staticClass:"column is-6"},[t.id?t._e():a("p",{staticClass:"content"},[t._v(" You need to enter youtube video id... ")]),t.id?a("div",[a("h3",{staticClass:"title is-3"},[a("a",{attrs:{href:t.url,target:"_blank"}},[t._v(" Youtube : "+t._s(t.title)+" ")])]),a("h4",{staticClass:"title is-4"},[t._v(" Length : "+t._s(new Date(1e3*t.length).toISOString().substr(11,8))+" ")]),a("vue-good-table",{attrs:{columns:t.columns,groupOptions:{enabled:!0},rows:t.rows,"sort-options":{enabled:!0,initialSortBy:{field:"itag",type:"asc"}}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["url"===e.column.field?a("span",[a("button",{staticClass:"clipboard button is-primary is-fullwidth",attrs:{"data-clipboard-text":e.row[e.column.field]}},[t._v("Click to copy direct URL")])]):a("span",[t._v(" "+t._s(e.formattedRow[e.column.field])+" ")])]}}],null,!1,1558683268)})],1):t._e()])])])},ht=[],pt=(a("a4d3"),a("e01a"),a("d28b"),a("466d"),a("dac4"),a("f617"));new x.a(".clipboard");var mt={name:"Video",components:{VueGoodTable:pt["a"]},data:function(){return{input:"",length:null,columns:[{label:"itag",field:"itag",type:"number"},{label:"Size",field:"contentLength",type:"number"},{label:"URL",field:"url",html:!0}],rows:[{mode:"span",label:"Video",html:!1,children:[]},{mode:"span",label:"Audio",html:!1,children:[]}],title:""}},methods:{addTable:function(t){"video"===t.mimeType.substr(0,5)?this.rows[0].children.push(t):this.rows[1].children.push(t),console.log(t)},clearTable:function(){this.rows[0].children=[],this.rows[1].children=[]},youtubeURL:function(t){var e=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,a=t.match(e);return!(!a||11!==a[7].length)&&a[7]}},watch:{id:function(){var t=this,e=this.id;return this.clearTable(),fetch("https://cors.halulu.workers.dev/?https%3A%2F%2Fwww.youtube.com%2Fget_video_info%3Fvideo_id%3D"+e).then((function(e){e.text().then((function(e){var a=e.split("&"),s=!0,n=!1,i=void 0;try{for(var o,r=a[Symbol.iterator]();!(s=(o=r.next()).done);s=!0){var c=o.value;if("player_response="===c.substr(0,16)){var l=decodeURIComponent(c.substr(16)).split(","),d=JSON.parse(l);console.log(d);var u=d.streamingData;console.log(u);var h=!0,p=!1,m=void 0;try{for(var v,b=u.formats[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){var f=v.value;t.addTable(f)}}catch(x){p=!0,m=x}finally{try{h||null==b.return||b.return()}finally{if(p)throw m}}var g=!0,C=!1,k=void 0;try{for(var w,_=u.adaptiveFormats[Symbol.iterator]();!(g=(w=_.next()).done);g=!0){var y=w.value;t.addTable(y)}}catch(x){C=!0,k=x}finally{try{g||null==_.return||_.return()}finally{if(C)throw k}}return t.title=d.videoDetails.title,void(t.length=d.videoDetails.lengthSeconds)}}}catch(x){n=!0,i=x}finally{try{s||null==r.return||r.return()}finally{if(n)throw i}}}))})),""}},computed:{id:function(){return this.youtubeURL(this.input)?this.youtubeURL(this.input):this.input},url:function(){return"https://www.youtube.com/watch?v="+this.id}}},vt=mt,bt=Object(l["a"])(vt,ut,ht,!1,null,null,null),ft=bt.exports;s["a"].use(n["a"]),s["a"].config.productionTip=!1;var gt=[{path:"/",redirect:"home"},{path:"/home",component:k},{path:"/hash",component:P},{path:"/encode",component:Y},{path:"/link",component:nt},{path:"/json",component:dt},{path:"/video",component:ft}],Ct=new n["a"]({routes:gt,linkActiveClass:"is-active"});new s["a"]({render:function(t){return t(u)},router:Ct}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.a81bdafb.js.map