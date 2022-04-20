<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Caption001",
};
</script>

<style scoped>
h2 {
  position: relative;
  padding: 1.5rem 2rem;
  color: #fff;
  border-radius: 10px;
  background: #094;
}

h2:after {
  position: absolute;
  bottom: -9px;
  left: 1em;
  width: 0;
  height: 0;
  content: '';
  border-width: 10px 10px 0 10px;
  border-style: solid;
  border-color: #094 transparent transparent transparent;
}
</style>