<!-- pages/index.vue -->
<template>
  <section class="container">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'50px'" :widthCollapsed="'50px'" />
    </div>
    <h1>Todo（要望）リスト</h1>
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
    <div>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <a :href="'post.url'" target="_blank" rel="noopener noreferrer">{{
            post.title
          }}</a>
        </li>
      </ul>
    </div>
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
      posts: response,
    };
  },

  data: () => {
    return {
      content: "",
      // TODO: サイドメニュー、コンポーネントにしたい
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
          hidden: false,
        },
                {
          href: "/store/v2",
          title: "store_info",
          icon: "fas fa-beer",
          badge: {
            text: "new",
            class: "vsm--badge_default",
          },
        },
        {
          href: "/store/map",
          title: "store_info",
          icon: "far fa-map",
          badge: {
            text: "new",
            class: "vsm--badge_default",
          },
        },
        {
          href: "/todo",
          title: "store_info",
          icon: "fa fa-user",
          badge: {
            text: "new",
            class: "vsm--badge_default",
            // attributes: {}
            // element: 'span'
          },
        },
        {
          href: "/store",
          title: "store_info_old",
          icon: "fa fa-chart-area",
        },
        // TODO: 多分コンポーネントにする場合は以下のように記載する？
        // {
        //   component: componentName,
        //   // props: componentProps
        //   // hidden: false
        //   // hiddenOnCollapse: true
        // },
      ],
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
  padding: 100px;
}
/* サイドメニューのスタイル */
/* @import url('https://use.fontawesome.com/releases/v5.6.1/css/all.css'); */
.sidebar-container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
}
</style>
