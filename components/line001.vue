<template>
    <hr class="news">
</template>

<script>
export default {
  name: 'Line001'
}
</script>

<style scoped>
.news {
  border-top: 1px solid #ccc;
  height: 0.01em;
  text-align: center;
  overflow: visible;
}
.news::after {
  content: "NEWS";
  background: #fff;
  /* color: #ccc; */
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  top: -1em;
  padding: 0 1em;
}
</style>