<template>
    <div class="card-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="scss" scoped>
    @import '../sass/variables';
    @import '../sass/mixins';

    .card-container{
        margin: 10px;
        background-color: $background_color;
        @include container_display($width: inherit);
        border-radius: 4px;
        box-shadow: 0.2px 0.4px 0.1px darken($background_color, 25%);
        transition: 0.2s;
        transition-property: all;

    }

    .onHover {
        &:hover {
            transform: scale(1.05);
            box-shadow: 1px 1px 1px lighten($primary_color, 8%),
            1px -1px 1px lighten($primary_color, 8%),
            -1px 1px 1px lighten($primary_color, 8%),
            -1px -1px 1px lighten($primary_color, 8%);
        }
    }
</style>