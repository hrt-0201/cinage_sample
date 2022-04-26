<template>
  <div class="ad-area" @click="returnTop">
    <h1>この画面は広告画面です</h1>
    <video class="ad" autoplay loop muted playsinline>
      <source src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/sample/resize.mp4" />
    </video>
    <Popup-menu />
  </div>
</template>

<script>
export default {
  methods: {
     returnTop(){
        this.$router.push('/')
    }
  }
}
</script>

<style scoped>
* {
    background-color: black;
    color: bisque;
}

.ad-area {
  padding-top: 300px;
  padding-left: 100px;
  background-color: black;
  height: 300vh;
}

.ad {
    width: 800px;
}
</style>
