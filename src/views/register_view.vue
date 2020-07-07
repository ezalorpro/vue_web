<template>
  <div class="register-container">
    <Card>
      <div class="forms-container">
        <h2>Registrarse</h2>
        
        <div class="row-container">
          <customInput 
            v-model="usuario"
            v-bind="{
              identifier: 'usuario',
              label: 'Usuario',
              icon: 'person_outline',
              type: 'text'
            }"
          />
        </div>

        <div class="row-container">
          <customInput 
            v-model="first_name"
            v-bind="{
              identifier: 'first_name',
              label: 'Nombre',
              icon: 'person',
              type: 'text',
              required: false
            }"
          />
          <customInput 
            v-model="last_name"
            v-bind="{
              identifier: 'last_name',
              label: 'Apellido',
              icon: 'person_add',
              type: 'text',
              required: false
            }"
          />
        </div>

        <div class="row-container">
          <customInput 
            v-model="email"
            v-bind="{
              identifier: 'email',
              label: 'Correo electronico',
              icon: 'email',
              type: 'email'
            }"
          />
        </div>

        <div class="row-container">
          <customInput 
            v-model="password1"
            v-bind="{
              identifier: 'password1',
              label: 'Contraseña',
              icon: 'lock',
              type: 'password'
            }"
          />
          <customInput 
            v-model="password2"
            v-bind="{
              identifier: 'password2',
              label: 'Contraseña (confirmacion)',
              icon: 'lock_outline',
              type: 'password',
            }"
          />
        </div>
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
      usuario: '',
      first_name: '',
      last_name: '',
      email: '',
      password1: '',
      password2: '',
    }
  },
  mounted () {
    this.nombre = '';
    this.email = '';
    this.password = '';
  }
}
</script>

<style lang="scss" scoped>
  @import "../sass/variables";
  @import "../sass/mixins";

  .register-container {
    @include container_display();

    .card-container {
      max-width: none;
      width: auto;
      padding: 30px;
      
      @include breakpoint() {
        max-width: auto;
        width: auto;
      }
    }
  }

  .forms-container {
    @include container_display($width: auto);

    .row-container {
      @include container_display($flow: row)
    }
  }

</style>