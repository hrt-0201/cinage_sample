<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Caption003",
};
</script>

<style scoped>
h2:first-letter {
  font-size: 150%;
  color: #eb6100;
}
</style>