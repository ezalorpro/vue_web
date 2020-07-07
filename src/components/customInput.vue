<template>
  <div class="input-container">
    <input 
      v-bind:value="value" v-on:input="$emit('input', $event.target.value)" 
      :id="identifier" 
      :required="required"
      :type="type" 
      class="input-el" 
      />
    <label :for="identifier" class="input-label">{{label}}</label>
    <i class="material-icons input-icons">{{icon}}</i>
  </div>
</template>

<script>
export default {
  name: "customInput",
  props: {
    value: {
      type: String
    },
    identifier: {
      type: String
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.input-icons {
  position: absolute;
  right: 1%;
  bottom: 27%;
}

.input-container {
  position: relative;
  margin: 10px;
  width: 100%;

  .input-el {
    outline-style: none;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #44444486;
    margin: 10px 0;
    padding: 10px 4px;
    width: 100%;
    box-sizing: border-box;

    &:focus + .input-label,
    &:valid + .input-label {
      position: absolute;
      transform: scale(0.8);
      transform: translateY(-120%);
      width: fit-content;
      background-color: #fff;
      color: $primary_color;
      display: flex;
      justify-content: center;
    }

    &:valid:focus + .input-label + .input-icons {
      color: $primary_color;
    }

    &:invalid:focus + .input-label + .input-icons {
      color: $second_color;
    }


    &:invalid:focus + .input-label {
      position: absolute;
      transform: scale(0.8);
      transform: translateY(-120%);
      width: fit-content;
      background-color: #fff;
      color: $second_color;
      display: flex;
      justify-content: center;
    }

    &:focus:valid {
      border-color: $primary_color;
    }

    &:focus:invalid {
      border-color: $second_color;
    }
  }

  .input-label {
    position: absolute;
    display: flex;
    top: 32%;
    left: 4px;
    transition: all 0.2s ease;
  }

  .input-container:focus {
    border-color: $primary_color;
  }
}
</style>