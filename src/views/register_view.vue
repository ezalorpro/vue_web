<template>
  <div class="register-container">
    <Card>
      <div class="forms-container">
        <span>Texto</span>
        <customInput v-model="nombre"></customInput>
      </div>
    </Card>
  </div>
</template>

<script>
import customInput from '@/components/customInput';
import Card from '@/components/card'

export default {
  name: 'register_view',
  components: {
    customInput,
    Card
  },
  data() {
    return {
      nombre: {
        type: String,
        default: ''
      }
    }
  },
  mounted () {
    this.nombre = '';
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .register-container {
    @include container_display();

    .card-container {
      max-width: 100%;
      padding: 10px;
      
      @include breakpoint() {
        max-width: 50%;
      }
    }
  }

  .forms-container {
    @include container_display($width: 60%)
  }

</style>