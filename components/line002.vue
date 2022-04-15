<template>
    <hr class="cutline">
</template>

<script>
export default {
  name: 'Line002'
}
</script>

<style scoped>
.cutline {
  border-top: 1px solid #ccc;
  height: 0.01em;
  text-align: center;
  overflow: visible;
}
.cutline::after {
  content: "\002702";
  background: #fff;
  color: #ccc;
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  top: -1em;
  padding: 0 0.5em;
}
</style>