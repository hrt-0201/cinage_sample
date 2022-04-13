// store/index.js
// TODO: クラシックモードで書いているのでモジュールモードに切り替えるべき
// https://nuxtjs.org/ja/docs/directory-structure/store/
// https://www.dailyupblog.com/web_development/906/
// https://qiita.com/higa02/items/d864f3f97ed1b9de044e


// ↓はモジュールモード

// export const state = () => ({
//   todos: [
//     { content: "テスト", created: "2020-04-30 17:00", state: "作業前" },
//     { content: "コーディング", created: "2020-04-30 16:00", state: "作業中" },
//     { content: "環境構築", created: "2020-04-30 15:30", state: "完了" },
//   ],
// });

// TODO: mutationsがうまくいかない
// export const mutations = () => ({
//   insert: function (state, obj) {
//     var d = new Date();
//     var fmt =
//       d.getFullYear() +
//       "-" +
//       ("00" + (d.getMonth() + 1)).slice(-2) +
//       "-" +
//       ("00" + d.getDate()).slice(-2) +
//       " " +
//       ("00" + d.getHours()).slice(-2) +
//       ":" +
//       ("00" + d.getMinutes()).slice(-2);
//     state.todos.unshift({
//       content: obj.content,
//       created: fmt,
//       state: "作業前",
//     });
//   },
// });

// export const mutations = {
//     ...insert
//   }

// ↓はクラシックモードでの書き方

import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: "サイドメニューUX悪いんで直す", created: "2020-04-30 17:00", state: "作業前" },
        { content: "画面遷移時のロード、初期表示のスプラッシュの実装方法を調査", created: "2020-04-30 17:00", state: "作業前" },
        { content: "CSSの共通化", created: "2020-04-30 17:00", state: "作業前" },
        { content: "サイドメニューはコンポーネント化して再利用しやすくする", created: "2020-04-30 17:00", state: "作業前" },
        { content: "共通利用できるJSはプラグイン化する", created: "2020-04-30 17:00", state: "作業前" },
        { content: "サイドメニューUI/UX悪いんで直す", created: "2020-04-30 17:00", state: "作業前" },
        {
          content: "Google Map使うか判断",
          created: "2020-04-30 16:00",
          state: "作業中",
        },
        { content: "プロトタイプ_v1", created: "2020-04-30 15:30", state: "完了" },
      ],
    }),
    // store/index.js
    mutations: {
      insert: (state, obj) => {
        var d = new Date();
        var fmt =
          d.getFullYear() +
          "-" +
          ("00" + (d.getMonth() + 1)).slice(-2) +
          "-" +
          ("00" + d.getDate()).slice(-2) +
          " " +
          ("00" + d.getHours()).slice(-2) +
          ":" +
          ("00" + d.getMinutes()).slice(-2);
        state.todos.unshift({
          content: obj.content,
          created: fmt,
          state: "作業前",
        });
      },
      remove: (state, obj) => {
        for(let i = 0; i < state.todos.length; i++) {
          const ob = state.todos[i];
          if(ob.content == obj.content && ob.created == obj.created) {
            if(confirm("" + ob.content + "を削除しますか？")) {
              state.todos.splice(i, 1);
              return;
            }
          }
        }
      }
    },
  });
};

export default createStore;
