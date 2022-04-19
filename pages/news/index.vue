<template>
  <div class="news-base">
    <Slidevar001 />
    <h1>ニュース一覧</h1>
    {{ this.messages }}
    <div @click="reload()">reload</div>

    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h2>{{ post.title }}</h2>
        <p class="img">
            <img :src="post.custom" alt="" />
        </p>
        <div class="description">
          {{ post.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log("########## 1");
    const params = {
      body: "usmart",
    };
    console.log("########## 2");
    // 取得先のURL
    const url =
      "https://57u2y22k2j.execute-api.ap-northeast-1.amazonaws.com/dev/soongetrss";
    console.log("########## 3");
    // リクエスト（Get）
    const response = await $axios.$post(url, params).catch(function (error) {
      // エラー時の処理を書く
      console.error("ERROR!");
      return { messages: "error" };
    });
    console.log("########## 4");
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
    console.log("########## 4-1");

    // レスポンスのオブジェクトをStrに変換
    var convertJson = JSON.stringify(response);
    // デバッグログ
    // console.log(typeof(convertJson));
    // console.log(convertJson);

    // 変換したレスポンス文字列から改行コードを削除
    var replaceRes = convertJson.replace(/\r?\n/g, "");
    // デバッグログ
    // console.log(replaceRes);
    // console.log("########## 4-1-1");

    // 改行コードを削除したレスポンス文字列をJSONに戻す
    var revertJson = JSON.parse(replaceRes);
    // デバッグログ
    // console.log(typeof(revertJson));
    // console.log(revertJson);
    console.log("########## 4-2");
    // for (let post in revertJson) {
    //   console.log("### 要素AAA:" + revertJson[post].title);
    //   // var obj = JSON.parse(post)
    //   // console.log("### parse:" + obj)
    //   try {
    //     console.log("########## 5");
    //     const res = await $axios.get(
    //       "https://www.shimotsuke.co.jp/articles/-/578580"
    //     );
    //     const html = res.data;
    //     // console.log("########## 5-1" + html);
    //   } catch (error) {
    //     console.log("########## 6");
    //     console.error(error);
    //   }
    // }

    for (let post in response) {
      console.log("########## 区切り線");
      var image_url_obj = response[post].custom
      console.info("要素：" + image_url_obj)
      console.info("要素プロと：" + Object.getPrototypeOf(response[post]))
      // console.info("要素url：" + image_url_obj.image)
      console.info("要素type：" + typeof(image_url_obj))
      var image_url_obj_tostr = JSON.stringify(image_url_obj)
      console.info("要素string：" + image_url_obj_tostr)
      console.info("要素string_type：" + typeof(image_url_obj_tostr))
      // console.info("要素url" + image_url_obj)
      // var image_url = JSON.parse(image_url_obj_tostr)
    }

    return {
      posts: response,
    };
  },

  data: () => {
    return {
      content: "",
      messages: "hogehoge",
    };
  },
  computed: {},
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>

<style scoped>
.news-base {
  padding-left: 80px;
}
</style>
