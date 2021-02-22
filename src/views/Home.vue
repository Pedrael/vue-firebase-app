<template>
  <div class="layout center dark">
    <div class="line">
      <router-link to="/login" class="button center">Login</router-link>
      <!-- <router-link to="/register" class="button center">Register</router-link> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
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
