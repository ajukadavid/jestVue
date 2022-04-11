<template>
  <NavBar />
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoApp />
  <parent-comp />
</template>

<script>
import TodoApp from "@/components/TodoApp";
import NavBar from "@/components/NavBar";
import ParentComp from "@/components/parent-comp";

export default {
  name: 'App',
  components: {
    ParentComp,
    NavBar,
    TodoApp,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
