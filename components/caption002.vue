<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Caption002",
};
</script>

<style scoped>
h2 {
  position: relative;
  padding: 1.5rem 2rem;
  border-bottom: 3px solid #000;
  border-left: 3px solid #000;
  border-radius: 0 0 0 20px;
}

h2:before {
  position: absolute;
  right: 50px;
  bottom: -21px;
  width: 0;
  height: 0;
  content: '';
  border-width: 21px 21px 0 0;
  border-style: solid;
  border-color: #000 transparent transparent transparent;
}

h2:after {
  position: absolute;
  right: 54px;
  bottom: -14px;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 14px 0 0;
  border-style: solid;
  border-color: #fff transparent transparent transparent;
}
</style>