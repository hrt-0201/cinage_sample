<template>
  <div>
    <h4>{{message}}</h4>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Caption005",
};
</script>

<style scoped>
h4 {
  position: relative;
  padding: 1rem 2rem calc(1rem + 10px);
  background: #fff100;
}

h4:before {
  position: absolute;
  top: -7px;
  left: -7px;
  width: 100%;
  height: 100%;
  content: '';
  border: 4px solid #000;
}
</style>