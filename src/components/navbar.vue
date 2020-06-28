<template>
    <div class="navbar-container">
        <button class="menu-button" v-on:click="menuClick()">
            <i class="material-icons">
                menu
            </i>
        </button>
        <span class="spacerMobile"></span>
        <a class="item title">Vuejs</a>
        <span class="spacerDesktop"></span>
        <a class="item">login</a>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        menuClick() {
            console.log('emitido')
            this.$emit('clicked', true)
        }
    }
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
        box-shadow: 0.3px 0.6px 0.1px darken($primary_color, 30%);
        @include container_display($flow: row, $justify: flex-start);

        .item{
            transition: 0.3s;
            transition-property: all;
            @include linkButton();
            display: none;

            @include breakpoint() {
                display: inherit;
            }
        }

        .title {
            font-size: 34px;
            font-weight: 7px;
            margin: 0 3px;
            font-style: italic;
            display: inherit;
        }

        .spacerMobile {
            flex: 1 1 auto;
            transition: 0.3s;
            transition-property: all;
            display:inherit;

            @include breakpoint() {
                display: none;
            }
        }

        .spacerDesktop {
            flex: 1 1 auto;
            transition: 0.3s;
            transition-property: all;
            display: none;

            @include breakpoint() {
                display: inherit;
            }
        }

        .menu-button {
            transition: 0.3s;
            transition-property: all;
            padding: 7px 7px;
            @include btn-style($wButton: fit-content);

            @include breakpoint() {
                display: none;
            }
        }
    }
</style>