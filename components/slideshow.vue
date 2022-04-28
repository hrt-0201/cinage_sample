<template>
  <!-- [▼ hero] -->
  <div class="hero">
    <div class="hero__inner">
      <ul class="hero-slide">
        <li class="hero-slide__item">
          <img class="hero-slide__img" src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/store-sample/001.jpg" alt="" loading="lazy" />
        </li>
        <li class="hero-slide__item">
          <img class="hero-slide__img" src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/store-sample/002.jpg" alt="" loading="lazy" />
        </li>
        <li class="hero-slide__item">
          <img class="hero-slide__img" src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/store-sample/003.jpg" alt="" loading="lazy" />
        </li>
      </ul>
      <div class="hero__heading">
        <div class="hero__title">SLIDESHOW ANIMATION</div>
      </div>
    </div>
  </div>
  <!-- [▲ hero] -->
</template>

<script>
export default {
  name: "Slideshow",
};
</script>

<style scoped>
/* --------------------------------
  Hero
-------------------------------- */

/* ------ slide image ------- */
.hero-slide__img {
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-name: slideAnime;
  animation-timing-function: ease;
  display: block;
  min-height: 30vh;
  object-fit: cover;
  opacity: 0;
  width: 100%;
}

.hero-slide__item:nth-of-type(1) .hero-slide__img {
  animation-delay: 0s;
}

.hero-slide__item:nth-of-type(2) .hero-slide__img {
  animation-delay: 5s;
}

.hero-slide__item:nth-of-type(3) .hero-slide__img {
  animation-delay: 10s;
}

@keyframes slideAnime {
  0% {
    opacity: 0;
  }

  16% {
    opacity: 1;
  }

  33% {
    opacity: 1;
  }

  49% {
    opacity: 0;
  }

  100% {
    opacity: 0;
    transform: translateX(-10%);
  }
}

/* ------ hero erea ------- */
.hero {
  height: 30vh;
  overflow: hidden;
  position: relative;
}
@media (max-height: 1000px) {
  .hero {
    height: 50vh;
  }
}
@media (max-height: 2000px) {
  .hero {
    height: 30vh;
  }
}

.hero__inner {
  margin: 0 auto;
  width: 1100px;
}

/* ------ hero title ------- */
.hero__title {
  font-size: 50px;
  font-weight: bold;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 45%;
  transform: translateY(-50%);
  width: 100%;
}

.hero-slide__item {
  bottom: 0;
  height: 100%;
  position: absolute;
  right: -10%;
  width: 110%;
}
</style>