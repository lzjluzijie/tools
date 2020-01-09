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

    new ClipBorad(".clipboard");

    export default {
        name: "Json",
        data() {
            return {
                input: '',
            }
        },
        computed: {
            output: function () {
                let input = this.input;
                if (input === "") {
                    return "You need to enter something..."
                }

                let j = {};

                try {
                    j = JSON.parse(input)
                } catch (e) {
                    window.console.log(e)
                    return e.toString()
                }

                return JSON.stringify(j, null, 4)
            },
        }
    }
</script>
