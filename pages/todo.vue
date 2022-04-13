<!-- pages/index.vue -->
<template>
  <section class="container">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'100px'" :widthCollapsed="'100px'" />
    </div>
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
          icon: {
            element: "span",
            class: "far fa-map fa-x"
          },
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
  font-size: 100px;
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
  position: absolute;
  display: block;
  padding: 0.5em;
  width: 1.2em;
  color: white; /*アイコン色*/
  font-weight: normal;/*アイコンは太字にしない*/
  text-align: center;
  left : -35px; /*左端からのアイコンまでの距離*/
  /*以下 上下中央寄せのため*/
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
