<template>
  <div id="encode">
    <div class="columns">
      <div class="column is-2">
        <h2 id="encode-title" class="title is-2" v-if="mode === 'encode'">
          Encode
        </h2>
        <h2 id="decode-title" class="title is-2" v-else>Decode</h2>
      </div>

      <div class="column is-10" style="text-align: center;">
        <div
          id="encode-arrow"
          v-on:click="change(true)"
          v-if="mode === 'encode'"
        >
          <h2 class="subtitle is-2" style="display: inline;">raw→enc</h2>
        </div>

        <div id="decode-arrow" v-on:click="change(false)" v-else>
          <h2 class="subtitle is-2" style="display: inline;">raw←enc</h2>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <ul class="menu-list">
            <li v-on:click="click">
              <a class="encode-name is-active" data-encode-name="base64"
                >Base64</a
              >
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="base64url">Base64 URL</a>
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="base58">Base58</a>
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="base36">Base36</a>
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="base32">Base32</a>
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="urlencode"
                >URL Encoding</a
              >
            </li>
            <li v-on:click="click">
              <a class="encode-name" data-encode-name="hex">hex</a>
            </li>
          </ul>
        </aside>
      </div>

      <div class="column is-5">
        <textarea
          class="textarea"
          id="raw"
          v-model="raw"
          :readonly="mode === 'decode'"
        />
      </div>

      <div class="column is-5">
        <textarea
          class="textarea"
          id="enc"
          v-model="enc"
          :readonly="mode === 'encode'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import * as SimpleBase from 'simple-base'
//todo
import base32 from 'hi-base32'

export default {
  name: 'Encode',
  data() {
    return {
      raw: '',
      encodeName: 'base64',
      mode: 'encode',
    }
  },
  computed: {
    enc: {
      get: function () {
        const raw = this.raw
        const encodeName = this.encodeName

        let enc = 'error!'
        switch (encodeName) {
          case 'base64':
            enc = window.btoa(raw)
            break
          case 'base64url':
            enc = window
              .btoa(raw)
              .replace(/\+/g, '-')
              .replace(/\//g, '_')
              .replace(/=+$/, '')
            break
          case 'base58':
            enc = SimpleBase.encode(raw, 58)
            break
          case 'base36':
            enc = SimpleBase.encode(raw, 36)
            break
          case 'base32':
            enc = base32.encode(raw)
            break
          case 'urlencode':
            enc = encodeURIComponent(raw)
            break
          case 'hex':
            enc = this.hexEncode(raw)
            break
        }
        return enc
      },
      set: function (enc) {
        const encodeName = this.encodeName
        let raw = 'error!'
        switch (encodeName) {
          case 'base64':
            raw = window.atob(enc)
            break
          case 'base64url':
            raw = window.atob(
              enc.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
            )
            break
          case 'base58':
            raw = SimpleBase.decode(enc, 58)
            break
          case 'base36':
            raw = SimpleBase.decode(enc, 36)
            break
          case 'base32':
            raw = base32.decode(enc)
            break
          case 'urlencode':
            raw = decodeURIComponent(enc)
            break
          case 'hex':
            raw = this.hexDecode(enc)
            break
        }
        this.raw = raw
        return raw
      },
    },
  },
  methods: {
    click: function (event) {
      const s = document.getElementsByClassName('encode-name')
      for (let i = 0; i < s.length; i++) {
        s[i].classList.remove('is-active')
      }
      event.target.classList.add('is-active')
      this.encodeName = event.target.getAttribute('data-encode-name')
      this.change(false)
    },
    change: function (decode) {
      if (decode) {
        this.mode = 'decode'
      } else {
        this.mode = 'encode'
      }
    },
    hexEncode: function (raw) {
      const arr = []
      for (let n = 0, l = raw.length; n < l; n++) {
        arr.push(Number(raw.charCodeAt(n)).toString(16))
      }
      return arr.join('')
    },
    hexDecode: function (enc) {
      const hex = enc.toString()
      let raw = ''
      for (let n = 0; n < hex.length; n += 2) {
        raw += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
      }
      return raw
    },
  },
}
</script>
