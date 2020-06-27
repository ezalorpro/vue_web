<template>
  <div id="app" class="layout">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
  
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
    "content"
    ;
  }

  .content {
    grid-area: content;
  }
</style>
