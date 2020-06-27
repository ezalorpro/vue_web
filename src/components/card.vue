<template>
    <div class="main-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'card',
}
</script>

<style lang="scss" scoped>
    @import '../sass/variables';
    @import '../sass/mixins';

    .main-container{
        margin: 5px;
        max-width: 300px;
        @include container_display();
        border-radius: 4px;
        box-shadow: 0.2px 0.4px 0.1px darken($background_color, 25%);
    }
</style>