<template>
  <transition name="slideIn">
    <div v-show="showSidebarComponent" class="sidebar-container">
      <transition name="slideIn">
        <div v-show="showSidebarComponent" class="sidebar">
          <a class="item">pokedex</a>
          <a class="item">login</a>
        </div>
      </transition>
      <transition name="FadeIn">
        <div v-show="showSidebarComponent" class="spacer" v-on:click="closeSidebar()"></div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Sidebar",
    props: {
      showSidebarComponent: Boolean
    },
    methods: {
      closeSidebar() {
        this.$emit("clicked", this.showSidebarComponent);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .sidebar-container {
    display: inherit;
    position: fixed;
    top: 60px;
    width: 100%;
    height: 100vh;
    transition: 0.3s;
    transition-property: all;

    @include breakpoint() {
      display: none;
    }

    .sidebar {
      position: fixed;
      padding: 5px 0;
      width: 40%;
      z-index: 1;
      height: 100vh;
      background-color: $background_color;
      border-right: 1px solid #686868;

      .item {
        transition: 0.3s;
        transition-property: all;
        @include linkButton(
          $bColor: $background_color,
          $fColor: $font_color,
          $margin: 5px 0
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

    @include slideIn(
      $distance11: -100%,
      $distance12: -100%,
      $width: 40%,
      $height: 100%
    );
    @include FadeIn();
  }
</style>