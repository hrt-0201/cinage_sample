<template>
  <div id="container">
    <p class="border">{{message}}</p>
  </div>
</template>

<script>
export default {
  props: ["message"],
  name: "Title003"
};
</script>

<style scoped>
#container {
  margin: 70px 20px;
}

.border {
  position: relative;
  text-align: center;
  font-size: 18px;
}

.border:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  border-bottom: solid 2px #000;
  transform: translateX(-50%);
  animation: border_anim 3s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>