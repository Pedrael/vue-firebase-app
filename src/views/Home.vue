<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #dedede;
  }
</style>
