<template>
  <div class="ad-area" @click="returnTop">
    <Slidevar001/>
    <h1>この画面は広告画面です</h1>
    <video class="ad" autoplay loop muted playsinline>
      <source src="/cat.mp4" />
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
  padding-left: 100px;
  background-color: black;
  height: 100%;
}

.ad {
    width: 800px;
}
</style>
