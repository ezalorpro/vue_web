<template>
  <div>
    <div class="home-container">
      <Carousel>
        <template v-for="item of 5" v-slot:[item]>
          <Card v-bind:key="item">
            <div class="profile">
              <div class="profile-left">
                <img src="/images/avatar.jpg" alt="holas" width="100px" class="profile-image" />
                <span>Usuario {{ item }}</span>
                <span>kleiver</span>
                <button type="button" class="button-edit">Editar</button>
              </div>
              <div class="profile-right">
                <span>
                  Nombre
                  <br />
                </span>
                <span>
                  Kleiver
                  <br />
                </span>
                <span>
                  Email
                  <br />
                </span>
                <span>kleiver@nisesupo.com</span>
              </div>
            </div>
          </Card>
        </template>
        <template v-slot:5>
          <img src="/images/logo.png" width="300px" alt="logo" />
        </template>
        <template v-slot:6>
          <img src="/images/avatar.jpg" class="generic-img" alt="logo" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
  import Card from "@/components/card";
  import Carousel from "@/components/carousel";

  export default {
    name: "Home",
    components: {
      Card,
      Carousel
    }
  };
</script>

<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .home-container {
    @include container_display(
      $flow: row wrap,
      $align: flex-start,
      $width: inherit
    );
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
        @include btn-style($ascent_color, $font_color);
      }
    }

    .profile-right {
      padding: 5px;
      color: $font_color;
      @include container_display($flow: column);
    }
  }
</style>