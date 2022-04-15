<template>
    <div class="container">
        <div class="btn slide-up">
            マウスオーバーすると色が変わる部品
        </div>
    </div>
</template>

<script>
export default {
  name: 'logo3d'
}
</script>

<style scoped>
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; */
  /* min-height: 100vh; */
}

.btn {
  background-color: #f6c0d9;
  color: #fff;
  padding: 15px 30px;
  margin: 30px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  z-index: 1;
}

.btn.slide-up {
  position: relative;
}

.btn.slide-up::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #b7e1f8;
  -webkit-transform: rotateX(-90deg);
          transform: rotateX(-90deg);
  -webkit-transition: -webkit-transform 0.7s;
  transition: -webkit-transform 0.7s;
  transition: transform 0.7s;
  transition: transform 0.7s, -webkit-transform 0.7s;
  -webkit-transform-origin: bottom center;
          transform-origin: bottom center;
  z-index: -1;
}

.btn.slide-up:hover {
  color: #999;
}

.btn.slide-up:hover::before {
  -webkit-transform: none;
          transform: none;
}
</style>