<template>
    <transition name="slideIn">
        <div v-show="showSidebarComponent" class="main-container">
            <transition name="slideIn">
                <div v-show="showSidebarComponent"  class="sidebar">
                    <a class="item">pokedex</a>
                    <a class="item">login</a>
                </div>
            </transition>
            <div v-show="showSidebarComponent" class="spacer" v-on:click="closeSidebar()"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        showSidebarComponent: Boolean
    },
    methods: {
        closeSidebar () {
            this.$emit('clicked', this.showSidebarComponent)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../sass/variables';
    @import '../sass/mixins';

    .main-container {
        display: inherit;
        position: fixed;
        top: 60px;
        width: 100%;
        height: 100vh;
        transition: 0.3s;
        transition-property: all;
        
        @include breakpoint() {
            display: none
        }

        .sidebar {
            position: fixed;
            width: 25%;
            z-index: 1;
            height: 100vh;
            background-color: $background_color;
            border-right: 1px solid #686868;

            .item{
                transition: 0.3s;
                transition-property: all;
                @include linkButton(
                    $bColor: $background_color,
                    $fColor: $font_color,
                    $margin: 0
                );
                @include container_display($flow: column);
            }
        }

        .spacer {
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: #0000004d;
        }

        @include slideIn($distance: -100%);
    }

</style>