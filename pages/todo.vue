<!-- pages/index.vue -->
<template>
  <section class="container">
    <Slidevar001/>

    <h1>アプリの使い方</h1>
    <ul>
      <li>左のサイドメニューから閲覧したい情報を選んでください</li>
      <li>この画面はサイネージ初期画面を想定しています</li>
      <li>不具合や気になる箇所がありましたら教えてください</li>
      <li>↓のTodoは入力しても画面リロードで消えてしまうのでご注意ください（Vuex利用のため一時的なもの）</li>
    </ul>

    <h1>Todoリスト</h1>
    <div class="addArea">
      <input
        type="text"
        name="addName"
        v-model="content"
        placeholder="タスクを入力してください"
      />
      <button class="button button--green" @click="insert">追加</button>
    </div>
    <div class="Filter">
      <button class="button button--gray is-active">全て</button>
      <button class="button button--gray">作業前</button>
      <button class="button button--gray">作業中</button>
      <button class="button button--gray">完了</button>
    </div>
    <table class="Lists">
      <thead>
        <tr>
          <th>タスク</th>
          <th>登録日時</th>
          <th>状態</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.content }}</td>
          <td>{{ item.created }}</td>
          <td>
            <button class="button">{{ item.state }}</button>
          </td>
          <td>
            <button class="button button--delete" @click="remove(item)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <h1>Todoリスト,Vue3バージョン</h1>

    <h1>Qiita</h1>
    <div>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <a :href="post.url" target="_blank" rel="noopener noreferrer">{{
            post.title
          }}</a>
        </li>
      </ul>
    </div>
    <Popup-menu />
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  async asyncData({ $axios }) {
    // 取得先のURL
    const url = "https://qiita.com/api/v2/items";
    // リクエスト（Get）
    const response = await $axios.$get(url);
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
    return {
      posts: response.slice(0, 10),
    };
  },

  data: () => {
    return {
      content: "",
    };
  },
  //   mounted: () => {
  //       postData() {
  //       const params = {
  //         OperationType: "SCAN",
  //       };

  //       const url = 'https://pjle7dwta5.execute-api.ap-northeast-1.amazonaws.com/APITest02/dynamodbctrl'
  //       const res = await this.$axios.$post(url, params)
  //       console.log(res)
  //     };
  //   },
  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    insert: function () {
      if (this.content != "") {
        this.$store.commit("insert", { content: this.content });
        this.content = "";
      } else {
        alert("タスク名がからです ");
      }
    },
    remove: function (todo) {
      this.$store.commit("remove", todo);
    },
  },
};
</script>

<style scoped>
.container {
  height: 300vh;
  width: 86vw;
  background-color: #999999;
  color: #ffffcc;
  padding-top: 0px;
  padding-left: 100px;
  padding-right: 45px;
}

/* リストデザイン佣 */
ul {
  padding: 0;
}

ul li {
  color: black;
  position:relative;
  background: #f1f8ff;/*バーの色*/
  line-height: 1.5;
  padding: 0.5em;
  margin-bottom: 4px;
  border-left : solid 35px #5c9ee7;/*先の色＝アイコン裏の色*/
  list-style-type: none!important;
}

ul li:before {
  font-family: "Font Awesome 5 Free";
  content: "\f303";
  font-weight: 900;
  position: absolute;
  display: block;
  padding: 0.5em;
  width: 1.2em;
  color: white; /*アイコン色*/
  text-align: center;
  left : -35px; /*左端からのアイコンまでの距離*/
  /*以下 上下中央寄せのため*/
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
