<template>
  <div class="news-base">
    <Slidevar001 />
    <h1>ニュース一覧</h1>
    <div @click="reload()">reload</div>

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
    console.log('########## 1')
    const params = {
      body: "news",
    };
    console.log('########## 2')
    // 取得先のURL
    const url =
      "https://12kego0h4c.execute-api.ap-northeast-1.amazonaws.com/dev";
    console.log('########## 3')
    // リクエスト（Get）
    const response = await $axios.$post(url, params).catch(function(error) {
        // エラー時の処理を書く
        console.log('ERROR!')
        return { messages: "error"}
    });
    console.log('########## 4')
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
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
  methods: {
    reload() {
      location.reload()
    }
  },
};
</script>

<style scoped>
.news-base {
  padding-left: 80px;
}
</style>
