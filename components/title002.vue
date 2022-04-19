<template>
    <div id="container">
  <div class="circle"></div>
  <p class="text">{{message}}</p>
</div>
</template>

<script>
export default {
  props: ['message'],
  name: 'Title002'
}
</script>

<style scoped>
p {
  padding: 10px;
}

#container {
  position: relative;
  height: 200px;
  margin: 20px;
}

.circle {
  position: absolute;
  left: 20px;
  top: 0;
  width: 100px;
  height: 100px;
  background: #4169e1;
  border-radius: 50%;
  animation: wobbling_x 0.8s ease-in-out infinite alternate,
    wobbling_y 1.1s ease-in-out infinite alternate;
}

.text {
  position: absolute;
  left: 160px;
  top: 30px;
  font-size: 20px;
  animation: wobbling_x 0.7s ease-in-out infinite alternate,
    wobbling_y 1.2s ease-in-out infinite alternate;
}

@keyframes wobbling_x {
  0% {
    margin-left: 8px;
  }

  100% {
    margin-left: 0px;
  }
}

@keyframes wobbling_y {
  0% {
    margin-top: 0px;
  }

  100% {
    margin-top: 8px;
  }
}
</style>