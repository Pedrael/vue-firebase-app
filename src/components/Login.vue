<template>
  <div class="login">
    <div class="line">
      <p>Login: </p><input type="text" v-model="loginpair.email">
    </div>
    <div class="line">
      <p>Password: </p><input type="password" v-model="loginpair.password">
    </div>
    <div class="line">
      <button v-on:click="submitForm">Log in</button>
      <button>Register</button>
    </div>
    <div class="line">
      <p class="error">{{errorMessage}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      errorMessage: " ",
      loginpair: {
        email: "",
        password: ""
      }
    }
  },

  methods: {
    submitForm: function() {
      console.log('submit vue')
      this.$store.dispatch('login', this.loginpair).then((r) => {
        this.errorMessage = "Logined!"
      }).catch((e) => {
        this.errorMessage = e.message
      })
    }
  }

}
</script>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #2a2a2e;
    padding: 50px;
    border-radius: 16px;
    width: 500px;
    max-width: 100vw;

    input {
      border: none;
      padding: 10px;
      border-radius: 10px;
      background: #ffffff;
      font-size: 20px;
    }

    button {
      background: #ff7f50;
      color: #000;
      border: none;
      padding: 20px;
      border-radius: 20px;
      min-width: 150px;
      font-size: 20px;
    }
  }

  .error {
    font-size: 12px;
    color: #eb0c0c;

  }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    max-width: 90%;
    padding: 5px;
  }

  p {
    font-family: 'Ubuntu';
    color: #fff;
    font-size: 20px;
  }
</style>