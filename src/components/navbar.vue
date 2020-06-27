<template>
    <div class="navbar-container">
        <a>pelispedia</a>
        <a>login</a>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
    @import '../sass/mixins';
    @import '../sass/variables';

    .navbar-container {
        color: $ascent_color;
        padding-left: 10px;
        background-color: $primary_color;
        grid-area: navbar;
        @include container_display($flow: row, $justify: flex-start);

        a{
            @include linkButton();
        }
    }
</style>