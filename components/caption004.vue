<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Caption004",
};
</script>

<style scoped>
h2 {
  position: relative;
  margin-bottom: 2em;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  background: #eee;
}

h2:before,
h2:after {
  position: absolute;
  content: '';
  border-radius: 50%;
  background: #eee;
}

h2:before {
  bottom: -15px;
  left: 30px;
  width: 30px;
  height: 30px;
}

h2:after {
  bottom: -30px;
  left: 50px;
  width: 15px;
  height: 15px;
}
</style>