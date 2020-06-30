<template>
  <div
    class="carousel-container"
    :style="{width: carousel_width, height: carousel_height}"
    v-touch:swipe.left="goRight"
    v-on:swipe.left.prevent="currentIndex == countItems"
    v-touch:swipe.right="goLeft"
    v-on:swipe.right.prevent="currentIndex == 1"
  >
    <div ref="carousel" :class="{'carousel-content': true}">
      <transition
        v-for="(_, slot) of $slots"
        v-bind:key="slot"
        v-bind:name="direction? 'slideInR' : 'slideInL'"
        mode="in-out"
      >
        <div class="carousel-item" v-show="slot == currentIndex">
          <slot :name="slot"></slot>
        </div>
      </transition>
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
    name: "Carousel",
    props: {
      carousel_width: {
        type: String,
        default: "400px"
      },
      carousel_height: {
        type: String,
        default: "100%"
      }
    },
    data() {
      return {
        currentIndex: {
          type: Number,
          default: 1
        },
        countItems: {
          type: Number,
          default: 0
        },
        direction: Boolean
      };
    },
    methods: {
      goRight(param) {
        if (param && this.currentIndex != this.countItems) {
          this.currentIndex += 1;
        } else if (!param) {
          this.currentIndex += 1;
        }
        this.direction = true;
      },
      goLeft(param) {
        if (param && this.currentIndex != 1) {
          this.currentIndex -= 1;
        } else if (!param) {
          this.currentIndex -= 1;
        }
        this.direction = false;
      }
    },
    mounted() {
      this.currentIndex = 1;
      this.countItems = 0;
      this.direction = true;

      for (const key in this.$slots) {
        if (!isNaN(key)) {
          this.countItems += 1;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .carousel-container {
    margin: 10px;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;

    @include container_display($width: inherit);

    .controls {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .carousel-button {
        border-style: none;
        display: block;
        height: 100%;
        padding: 0;
        width: 40px;
        background-color: #00000049;
        transition: all 0.1s ease;

        &i {
          color: #000;
        }

        &:focus {
          outline: none;
        }

        &:active {
          background-color: lighten($color: #000000ad, $amount: 20%);
        }
      }
    }
  }

  .carousel-content {
    overflow: hidden;
    @include container_display($flow: column, $justify: flex-start);
    @include slideIn(
      $distance12: -100%,
      $width: calc(100% - 80px),
      $class: "slideInR"
    );
    @include slideIn(
      $distance11: -100%,
      $width: calc(100% - 80px),
      $class: "slideInL"
    );
    padding: 0 10px;
  }

  .carousel-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
</style>