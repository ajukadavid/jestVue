<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data(){
    return {
      todos: [
        {
          id: 1,
          text: "Learn Vue testing"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
