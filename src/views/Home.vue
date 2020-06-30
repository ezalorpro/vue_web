<template>
  <div>
    <div class="home-container">
      <div class="left-content">
        <Card>
          <div class="profile">
            <div class="profile-left">
              <img src="/images/avatar.jpg" alt="holas" width="100px" class="profile-image" />
              <span>Usuario</span>
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
      </div>
      <div class="main-content">
        <Carousel v-bind="{show_frame: false, carousel_height: '440px', carousel_width: '100%'}">
          <template v-slot:1>
            <img
              src="https://media.gettyimages.com/photos/someone-jumping-into-lake-tahoe-picture-id541993270?s=612x612"
              height="100%"
              alt="imagen"
            />
          </template>
          <template v-slot:2>
            <img src="/images/logo.png" height="100%" alt="logo" />
          </template>
          <template v-slot:3>
            <img
              src="https://media.gettyimages.com/photos/someone-jumping-into-lake-tahoe-picture-id541993270?s=612x612"
              height="100%"
              alt="imagen"
            />
          </template>
          <template v-slot:4>
            <img src="/images/avatar.jpg" height="100%" alt="logo" />
          </template>
        </Carousel>
      </div>
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
  display: grid;
  grid-template-areas: 
  "left"
  "center";
  grid-template-columns: auto;
  transition: all 0.2s ease;
  align-items: flex-start;
  @include breakpoint($md) {
    grid-template-areas: 
    "left center";
    grid-template-columns: 30% auto;
  }
}

.left-content {
  grid-area: left;
  display:flex;
  justify-content: center;
}

.main-content {
  grid-area: center;
  display:flex;
  justify-content: center;
}

.profile {
  @include container_display();
  @include breakpoint() {
    @include container_display($flow: wrap);
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