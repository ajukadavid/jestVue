<template>
  <div class="hello">
    Parent
    <ChildComp />
  </div>
</template>

<script>
import ChildComp from "@/components/child-comp";
export default {
  name: 'ParentComp',
  components: {
    ChildComp
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
