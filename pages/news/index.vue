<template>
  <div class="news-base">
    <Slidevar001 />
    <h1>ニュース一覧</h1>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
          <h2>{{post.title}}</h2>
        <div class="description">
            {{post.description}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const params = {
      body: "news",
    };
    // 取得先のURL
    const url =
      "https://wiy374cww3.execute-api.ap-northeast-1.amazonaws.com/dev";
    // リクエスト（Get）
    const response = await $axios.$get(url, params);
    // 配列で返ってくるのでJSONにして返却
    console.log(typeof response);
    console.log(response);
    // var objnews = JSON.parse(response);
    // console.log(typeof objnews);
    // console.log(objnews);
    return {
      posts: response,
    };
  },

  data: () => {
    return {
      content: "",
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.news-base {
  padding-left: 80px;
}
</style>
