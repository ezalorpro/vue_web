<template>
  <div >
    <div class="main-container">
      <card v-for="item of 10" v-bind:key="item">
        holas    
      </card>
    </div>
  </div>
</template>

<script>
import card from "@/components/card"

export default {
  name: "Home",
  components: {
    card
  }
};
</script>

<style lang="scss" scoped>
  @import '../sass/variables';
  @import '../sass/mixins';

  .main-container {
    @include container_display($flow: row wrap);
  }
</style>