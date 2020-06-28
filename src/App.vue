<template>
  <div id="app" class="layout">
    <Navbar v-on:clicked="showSidebarflag = !showSidebarflag" />
    <div class="content">
      <router-view />
    </div>
    <Sidebar 
      v-bind:showSidebarComponent="showSidebarflag" 
      v-on:clicked="showSidebarflag = !arguments[0]" 
    />
  </div>
</template>
<script>
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

export default {
  name: 'app',
  data: function() {
    return {
      showSidebarflag: false
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>
<style lang="scss">
  @import './sass/mixins';
  @import './sass/variables';

  body {
    margin: 0;
    box-sizing: border-box;
  }

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
  }

</style>
