<template>
    <div class="columns">
        <div class="column">
            <textarea class="textarea" id="input" data-clipboard-target="#input" v-model="input"></textarea>
        </div>

        <div class="column">
            <textarea class="textarea" id="output" data-clipboard-target="#output" v-model="output" readonly></textarea>
        </div>
    </div>
</template>

<script>
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
                let j = {};

                try {
                    j = JSON.parse(input);
                } catch (e) {
                    window.console.log(e);
                    return "error"
                }
                return JSON.stringify(j, null, 4)
            },
        }
    }
</script>
