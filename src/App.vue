<template>
  <div id="app">
    <layout>
      <router-view />
    </layout>
  </div>
</template>

<script>
  import layout from '@/components/layout'
  export default {
    name: 'app',
    components: {
      layout
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    box-sizing: border-box;
  }

  .generic-img {
    width: 100%;
    height: auto;
  }
</style>
