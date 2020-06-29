<template>
  <div class="carousel-container">
    <div ref="carousel" :class="{'carousel-content': true}">
      <transition-group name="slideIn" tag="div">
        <div class="carousel-item" v-for="(_, slot) of $slots" v-bind:key="slot" v-show="slot == currentIndex">
          <slot :name="slot"></slot>
        </div>
      </transition-group>
    </div>
    <div class="controls">
      <button v-on:click="goLeft()" :disabled="currentIndex == 1" class="carousel-button">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <button v-on:click="goRight()" :disabled="currentIndex == countItems" class="carousel-button">
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
      return {
        currentIndex: {
          type: Number,
          default: 1
        },
        countItems: {
          type: Number,
          default: 1
        }
      }
    },
    methods: {
      goRight() {
        this.currentIndex += 1;
      },
      goLeft() {
        this.currentIndex -= 1;
      }
    },
    mounted() {
      this.currentIndex = 1
      this.countItems = this.$children[0].$children.length
    }
}
</script>

<style lang="scss" scoped>
    @import "../sass/variables";
    @import "../sass/mixins";

    .carousel-container {
      border: 2px solid $primary_color;
      margin: 10px;
      position: relative;
      overflow: hidden;
      @include container_display($width: inherit);

      .controls{
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 50%;
      }

    }

    .carousel-content {
      overflow: hidden;
      @include container_display($flow: column, $justify: flex-start);
      @include slideIn( 1s, 100%, 0, 0px);
      padding: 10px;

    }

    .carousel-item{
      display: flex;
      max-width: 360px;
    }
</style>