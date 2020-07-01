<template>
  <div class="layout">
    <Navbar v-on:clicked="showSidebarflag = !showSidebarflag" />
    <div class="content">
      <transition name="FadeIn" mode="out-in">
        <slot></slot>
      </transition>
    </div>
    <Sidebar
      v-bind:showSidebarComponent="showSidebarflag"
      v-on:clicked="showSidebarflag = !arguments[0]"
    />
  </div>
</template>

<script>
  import Navbar from "@/components/navbar";
  import Sidebar from "@/components/sidebar";

  export default {
    name: "layout",
    data: function() {
      return {
        showSidebarflag: false
      };
    },
    components: {
      Navbar,
      Sidebar
    }
  };
</script>

<style lang="scss" scoped>
  @import '../sass/mixins';

  .layout {
    display: grid;
    grid-template-rows: 60px calc(100vh - 60px);
    grid-template-columns: auto;
    height: 100vh;
    grid-template-areas:
      "navbar"
      "content";
  }

  .content {
    grid-area: content;
    overflow: auto;
    @include FadeIn($time: 0.15s)
  }
</style>