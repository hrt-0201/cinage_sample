<template>
  <div class="container">
  <div class="rotation"></div>
  <div class="circle"></div>
  <div class="line1"></div>
  <div class="line2"></div>
  <div class="count">
    <p>10</p>
    <p>9</p>
    <p>8</p>
    <p>7</p>
    <p>6</p>
    <p>5</p>
    <p>4</p>
    <p>3</p>
    <p>2</p>
    <p>1</p>
  </div>
  <div class="black_out"></div>
  <div class="text_pop"><p>ほげほげほげ</p></div>
</div>
</template>

<script>
export default {
  name: "Countdown",
};
</script>

<style scoped>
p{
padding: 10px;
}

.container{
  position:relative;
  width: 500px;
  height: 150px;
  background: #a0a0a0;
  overflow: hidden;
  animation: black-out 1s 10s linear;
}

/* count */
.count p{
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  margin: 0;
  padding: 0;
  color: #a0a0a0;
  font-size: 50px;
  font-weight: bold;
  opacity:0;
}


.count p:nth-child(1) {
  animation: count-down 1s 0s;
}

.count p:nth-child(2) {
  animation: count-down 1s 1s;
}

.count p:nth-child(3) {
  animation: count-down 1s 2s;
}

.count p:nth-child(4) {
  animation: count-down 1s 3s;
}

.count p:nth-child(5) {
  animation: count-down 1s 4s;
}

.count p:nth-child(6) {
  animation: count-down 1s 5s;
}

.count p:nth-child(7) {
  animation: count-down 1s 6s;
}

.count p:nth-child(8) {
  animation: count-down 1s 7s;
}

.count p:nth-child(9) {
  animation: count-down 1s 8s;
}

.count p:nth-child(10) {
  animation: count-down 1s 9s;
}


@keyframes count-down {
  0%,100% {opacity:1;}
}


/* circle */
.circle{
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border: double 15px #a0a0a0;
  border-radius: 50%;
}


/* line */
.line1{
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: #a0a0a0;
}

.line2{
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: #a0a0a0;
}



/* rotation */
.rotation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  box-sizing: border-box;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  background: #606060;
  background-image: linear-gradient(to right, #797979 50%, transparent 0);
}

.rotation::before{ 
  content: '';
  display: block;
  margin-left: 50%;
  height: 100%;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  background: #797979;
  transform: rotate(0turn);
  animation: rotation1 .5s linear 20, rotation2 1s step-end 10;
}

@keyframes rotation1 {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}


@keyframes rotation2 {
  0% { background: #797979; }
  50% { background: #606060; }
}


/* black out */
.black_out{
  position: absolute;
  width: 100%;
  height: 100%;
  animation: black-out .5s 10s linear forwards;
}

@keyframes black-out {
  100% { background: #000; }
}


/* text_pop */
.text_pop{
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  margin: 0;
  padding: 0;
  color: #fbfbfb;
  font-size: 20px;
  font-weight: bold;
  opacity:0;
  animation: text-pop 2s 13s linear forwards;
}

@keyframes text-pop {
  100% {opacity:1;}
}
</style>