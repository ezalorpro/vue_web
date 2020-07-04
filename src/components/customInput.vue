<template>
    <div class="input-container">
        <div class="input-box">
            <input
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "customInput",
    props: ['value']
}
</script>

<style lang="scss" scoped>
    @import "../sass/variables";
    @import "../sass/mixins";

    .input-container {
        
        .input-box {
            input {
                border-style: none;
                border-bottom-style: solid;
                outline: none;

                &:focus {
                    outline: none;
                    border-color: $primary_color;
                }
            
            }
        }   
    }
</style>