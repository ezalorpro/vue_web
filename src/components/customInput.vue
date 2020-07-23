<template>
  <div class="input-container">
    <input 
      v-bind:value="value" v-on:input="validators" 
      :id="identifier" 
      :required="required"
      :type="type" 
      class="input-el"
      v-on:change="validators"
      :class="{
        'validInput': validInput && type == 'email' && value.length > 0, 
        'invalidInput': !validInput && type == 'email' && value.length > 0}"
      />
    <label :for="identifier" class="input-label">{{label}}</label>
    <i class="material-icons input-icons">{{icon}}</i>
  </div>
</template>

<script>
export default {
  name: "customInput",
  data() {
    return {
      validInput: {
        type: Boolean,
        default: false
      }
    }
  },
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
  },
  methods: {
    validators: function ($event) {
      this.$emit('input', $event.target.value)
      if (this.type == 'email' && $event.target.value.length  > 0) {
        this.validInput = this.validEmail($event.target.value)
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    this.validInput = false;
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
    border-bottom: 1.5px solid #44444486;
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

  .invalidInput {
    border-color: $second_color;

    &  + .input-label {
      position: absolute;
      transform: scale(0.8);
      transform: translateY(-120%);
      width: fit-content;
      background-color: #fff;
      color: $second_color;
      display: flex;
      justify-content: center;
    }
  }
}
</style>