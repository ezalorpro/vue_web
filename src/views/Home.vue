<template>
  <div>
    <div class="main-container">
      <card v-for="item of 12" v-bind:key="item" v-bind:hover="true">
        <div class="profile">
          <div class="profile-left">
            <img src="/images/avatar.jpg" alt="holas" width="100px" class="profile-image">
            <span> Usuario </span>
            <span> kleiver </span>
            <button type="button" class="button-edit">Editar</button>
          </div>
          <div class="profile-right">
            <span> Nombre <br> </span>
          <span> Kleiver <br> </span>
          <span> Email <br> </span>
          <span> kleiver@nisesupo.com </span>
          </div>
        </div> 
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
    @include container_display($flow: row wrap, $align: flex-start, $width: inherit);
    transition: 0.2s;
    transition-property: all;
  }

  .profile {
    @include container_display();
    @include breakpoint() {
      @include container_display($flow: row);
    }

    .profile-left {
      padding: 5px;
      border-radius: 4px;
      background-color: $primary_color;
      color: $ascent_color;

      @include container_display($flow: column);

      .profile-image {
        border-radius: 50%;
      }

      .button-edit {
        @include btn-style(
          $ascent_color,
          $font_color
        )
      }
    }

    .profile-right {
      padding: 5px;
      color: $font_color;

      @include container_display($flow: column);
    }
  }
</style>