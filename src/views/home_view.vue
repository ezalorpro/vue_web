<template>
  <div>
    <div class="home-container">
      <div class="left-content">
        <Card>
          <div class="profile">
            <div class="profile-left">
              <img 
                src="/images/avatar.jpg" 
                alt="holas" 
                width="100px" 
                class="profile-image" 
              />
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
        <Carousel
          style="border-radius: 4px"
          v-bind="{
            show_frame: false, 
            carousel_height: '245px', 
            carousel_width: '100%', 
            carousel_time: 4000
            }"
        >
          <template v-slot:1>
            <img
              loading="lazy"
              src="https://media.gettyimages.com/photos/someone-jumping-into-lake-tahoe-picture-id541993270?s=612x612"
              height="100%"
              alt="imagen"
            />
          </template>
          <template v-slot:2>
            <img
              loading="lazy"
              src="https://conceptodefinicion.de/wp-content/uploads/2014/05/imagen.jpg"
              height="100%"
              alt="logo"
            />
          </template>
          <template v-slot:3>
            <img
              src="https://www.40defiebre.com/wp-content/uploads/2013/11/optimizacion.png"
              height="100%"
              alt="imagen"
            />
          </template>
          <template v-slot:4>
            <img
              loading="lazy"
              src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/08/15863374252712.jpg"
              height="100%"
              alt="logo"
            />
          </template>
          <template v-slot:5>
            <img
              loading="lazy"
              src="https://hotbook.com.mx/wp-content/uploads/2019/04/hotbook-se-revela-la-primera-imagen-de-un-agujero-negro-portada.jpg"
              height="100%"
              alt="logo"
            />
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
  name: "home",
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
    grid-template-areas: "left center";
    grid-template-columns: 30% auto;
  }
}

.left-content {
  grid-area: left;
  display: flex;
  justify-content: center;
}

.main-content {
  grid-area: center;
  display: flex;
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
      @include btn-style($ascent_color, $font_color, $wButton: 80px);
    }
  }

  .profile-right {
    padding: 5px;
    color: $font_color;
    @include container_display($flow: column);
  }
}
</style>