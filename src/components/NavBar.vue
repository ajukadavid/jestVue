<template>
  <nav>
    <a id="home">Home</a>
    <a v-if="isLoggedIn" id="profile">My Profile</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      isLoggedIn: false
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
