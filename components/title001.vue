<template>
    <div class="top-title">Title Area!!!!</div>
</template>

<script>
export default {
  name: 'Title001'
}
</script>

<style scoped>
.top-title {
  font-family: monospace;
  width: 14ch;
  border-right: 0.08em solid;
  overflow: hidden;
  font-size: 4em;
  white-space: nowrap;
  animation: typing 5s steps(14, end), caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>