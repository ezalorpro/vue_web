<template>
  <div
    class="carousel-container"
    :class="{'show-frame': show_frame}"
    :style="{width: carousel_width, height:carousel_height}"
    v-touch:swipe.left="goRight"
    v-touch:swipe.right="goLeft"
  >
    <div ref="carousel" class="carousel-content">
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
        default: "100%"
      },
      carousel_height: {
        type: String,
        default: "300px"
      },
      show_frame: {
        type: Boolean,
        default: false
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

  .show-frame {
    border: 2px solid $primary_color;
    border-radius: 4px;
  }
  .carousel-container {
    margin: 10px;
    position: relative;
    overflow: hidden;
    transition: 0.3s ease;

    @include container_display($width: auto);

    &:hover {
      .controls > .carousel-button{
        opacity: 1;
      }
    }
    
    .controls {
      user-select: none;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .carousel-button {
        border-style: none;
        display: block;
        opacity: 0;
        height: 100%;
        padding: 0;
        width: 40px;
        background-color: #00000049;
        transition: all 0.3s ease;

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
    height: 100%;
    @include container_display($flow: column);
    @include slideIn(
      $time: 0.4s,
      $distance11: 150%,
      $distance12: -150%,
      $width: calc(100% - 80px),
      $height: 100%,
      $class: "slideInR"
    );
    @include slideIn(
      $time: 0.4s,
      $distance11: -150%,
      $distance12: 150%,
      $width: calc(100% - 80px),
      $height: 100%,
      $class: "slideInL"
    );
  }

  .carousel-item {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>