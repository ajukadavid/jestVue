<template>
  <div>
<div v-for="todo in todos" :key="todo.id" data-test="todo">
  {{todo.text}}
</div>
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
          text: "Learn Vue testing",
          completed: false
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
