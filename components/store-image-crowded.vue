<template>
  <div class="store-image-crowded">
    <img :src="store_image_url" alt="" loading="lazy" />
  </div>
</template>

<script>
export default {
  props: ["store_image_url"],
  name: "Store-image-crowded",
};
</script>

<style scoped>
img {
  width: 100%;
  height: 300px;
  vertical-align: bottom;
  object-fit: cover;
}
.store-image-crowded {
  position: relative;
  background-color: aliceblue;
  width: 100%;
  max-width: 384px;
  padding: 10px;
  /* margin: 60px auto; */
  aspect-ratio: 16/9;
}
.store-image-crowded::before {
  position: absolute;
  content: "混雑";
  top: 0;
  right: 0;
  border-radius: 20px;
  background-color: crimson;
  font-weight: 900;
  font-size: 1.5rem;
  color:antiquewhite;
  padding: 5px 25px;
}
</style>