<template>
  <div>
<div v-for="todo in todos"
     :key="todo.id"
     data-test="todo"
     :class="[todo.completed ? 'completed' : '']"

>
  {{todo.text}}
  <input type="checkbox"
         v-model="todo.completed"
         data-test="todo-checkbox">
</div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data(){
    return {
      newTodo: '',
      todos: [
        {
          id: 1,
          text: "Learn Vue testing",
          completed: false
        }
      ]
    }
  },
  methods: {
    createTodo(){
      this.todos.push({
        id:2,
        text: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through;
  opacity: 0;
  transition: opacity 2s ease-in-out;
}
</style>
