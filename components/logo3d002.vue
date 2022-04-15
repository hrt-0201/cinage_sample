<template>
    <div class="container">
        <div class="btn effect-3d">
            <span>開く</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Logo3d002'
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
  padding: 18px 30px;
  margin: 30px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  z-index: 1;
}

.btn.effect-3d {
  position: relative;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 800px;
          perspective: 800px;
  -webkit-perspective-origin: -50% 50%;
          perspective-origin: -50% 50%;
}

.btn.effect-3d span {
  display: inline-block;
  -webkit-transform: translateZ(20px);
          transform: translateZ(20px);
}

.btn.effect-3d::before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f6c0d9;
  -webkit-transform: none;
          transform: none;
  -webkit-transition: -webkit-transform 0.7s;
  transition: -webkit-transform 0.7s;
  transition: transform 0.7s;
  transition: transform 0.7s, -webkit-transform 0.7s;
  -webkit-transform-origin: left center;
          transform-origin: left center;
  opacity: 1;
}

.btn.effect-3d:hover {
  color: #999;
  opacity: 1;
  background-color: #b7e1f8;
  -webkit-perspective: 250px;
          perspective: 250px;
}

.btn.effect-3d:hover::before {
  background-color: #f6c0d9;
  -webkit-transform: rotateY(-90deg);
          transform: rotateY(-90deg);
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  opacity: 1;
}
</style>