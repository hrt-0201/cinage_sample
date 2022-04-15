<template>
  <div class="scene">
    <div class="cube">
      <div class="cube__face cube__face--front"></div>
      <div class="cube__face cube__face--top"></div>
      <div class="cube__face cube__face--back"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo3d004",
};
</script>

<style scoped>
.scene {
  width: 300px;
  height: 50px;
  border: 1px solid #ccc;
  margin: 20px;
  perspective: 400px;
}

.cube {
  width: 300px;
  height: 50px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.3s ease-in-out;
}

.cube:hover {
  transform: translateZ(-25px) rotateX(-90deg);
}

.cube__face {
  position: absolute;
  width: 300px;
  height: 50px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: hsla(0, 100%, 50%, 0.7);
}
.cube__face--top {
  background: hsla(240, 100%, 50%, 0.7);
}

.cube__face--front {
  transform: translateZ(25px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(25px);
}
.cube__face--back {
  transform: rotateX(1800deg) translateZ(25px);
}
</style>
