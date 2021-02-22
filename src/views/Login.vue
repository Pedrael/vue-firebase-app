<template>
  <div class="layout center light">
    <div class="panel dark">
    <div class="line">
      <p>Login: </p><input class="input" type="text" v-model="loginpair.email">
    </div>
    <div class="line">
      <p>Password: </p><input class="input" type="password" v-model="loginpair.password">
    </div>
    <div class="line">
      <button class="button" v-on:click="submitForm">Log in</button>
      <router-link to="/" class="button center">Back</router-link>
    </div>
    <div class="line">
      <p class="error">{{errorMessage}}</p>
    </div>
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
        email: "m@mail.ru",
        password: "123456"
      }
    }
  },

  methods: {
    submitForm: function() {
      console.log('submit vue')
      this.$store.dispatch('login', this.loginpair).then((r) => {
        this.$router.push('/main/'+r.user.uid)
      }).catch((e) => {
        this.errorMessage = e.message
      })
    }
  }
}
</script>
