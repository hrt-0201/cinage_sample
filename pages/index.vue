<!-- pages/index.vue -->
<template>
  <section class="container" @click="reset()">
    <Slidevar001/>
    <div class="top-title">Title Area!!!!</div>

    <h1>アプリの使い方</h1>
    <ul>
      <li>左のサイドメニューから閲覧したい情報を選んでください</li>
      <li>この画面はサイネージ初期画面を想定しています</li>
      <li>不具合や気になる箇所がありましたら教えてください</li>
    </ul>

    <h1>最新のニュース</h1>
    <News001 />

    <h1>お店の最新のつぶやき</h1>
    <div v-for="comment in comments" :key="comment.update_date">
      <div class="balloon01 change-time15 fadeUp">
        <div class="icon01">
          <img :src="comment.store_image_url" />
        </div>
        <div class="chat01">
          <div class="talk01">
            <div class="comment-store-name">{{ comment.store_name }}</div>
            <p>{{ comment.comment }}</p>
            <div class="comment-date">投稿日時：{{ comment.update_date }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="weather" @click="show()">
      <WeatherSwitch />
    </div>

    <modal name="modal-content" :width="600" :height="900">
      <div @click="hide()" class="round_btn"></div>
      <h2>天気予報</h2>
      <iframe
        src="https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=090000"
        width="600"
        height="800"
        scrolling="no"
      ></iframe>
    </modal>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log('########## 1')
    const params = {
      OperationType: "COMMENT",
    };
    console.log('########## 2')
    // 取得先のURL
    const url =
      "https://pjle7dwta5.execute-api.ap-northeast-1.amazonaws.com/APITest02/dynamodbctrl";
    console.log('########## 3')
    // リクエスト（Post）
    const response = await $axios.$post(url, params).catch(function(error) {
        // エラー時の処理を書く
        console.log('ERROR!')
    });
    console.log('########## 4')
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
    return {
      comments: response.Items,
    };
  },

  data: () => {
    return {
      content: "",
      t: 0,
    };
  },
  computed: {},
  methods: {
    show() {
      this.$modal.show("modal-content");
    },
    hide() {
      this.$modal.hide("modal-content");
    },
    countStart() {
      this.$count();
    },
    reset() {
      this.$reset();
    }
  },
  mounted() {
    window.onload = () => {
      // alert("ページが読み込まれました！");
      console.log("画面処理開始");
      this.countStart();
    };
  },
};
</script>

<style scoped>
.container {
  padding: 100px;
}

/* リストデザイン佣 */
ul {
  padding: 0;
}

ul li {
  color: black;
  position: relative;
  background: #f1f8ff; /*バーの色*/
  line-height: 1.5;
  padding: 0.5em;
  margin-bottom: 4px;
  border-left: solid 35px #5c9ee7; /*先の色＝アイコン裏の色*/
  list-style-type: none !important;
}

ul li:before {
  font-family: "Font Awesome 5 Free";
  content: "\f303";
  position: absolute;
  display: block;
  padding: 0.5em;
  width: 1.2em;
  color: white; /*アイコン色*/
  font-weight: normal; /*アイコンは太字にしない*/
  text-align: center;
  left: -35px; /*左端からのアイコンまでの距離*/
  /*以下 上下中央寄せのため*/
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

/* 天気予報ボタンの位置 */
.weather {
  position: fixed;
  top: 100px;
  right: 50px;
  width: 30%;
  padding: 5px;
}
/* 閉じるボタンのスタイリング */
.round_btn {
  display: block;
  position: relative;
  top: 10px;
  left: 540px;
  width: 50px;
  height: 50px;
  border-radius: 50%; /* 丸みの度合い */
  background: #333; /* ボタンの背景色 */
}

.round_btn::before,
.round_btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 21px;
  background: #fff; /* バツ印の色 */
}

.round_btn::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.round_btn::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* つぶやき吹き出しのスタイリング */
/* 全体の設定 */
.balloon01 {
  width: 100%;
  margin: 1.5em 0;
  overflow: hidden;
  animation-name: fadeUpAnime; /*アニメーションの定義名*/
  animation-duration: 1s; /*アニメーション変化時間 ※デフォルト*/
  animation-fill-mode: forwards; /*アニメーションの開始と終了時の状態を指定*/
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.change-time15 {
  animation-duration: 1.5s;
}

/* アイコンの場所 */
.balloon01 .icon01 {
  float: left;
  margin-right: -80px;
  /* アイコンの大きさ */
  width: 100px;
}
/* アイコン画像の作成 */
.balloon01 .icon01 img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  /* アイコンの枠の太さ、カラーはここで変更 */
  border: solid 3px #1efa1e;
}
.balloon01 .chat01 {
  width: 100%;
}
/* 吹き出しの入力部分の作成 */
.talk01 {
  /* この部分を外すと横幅いっぱいになります */
  display: inline-block;
  position: relative;
  margin: 5px 0 0 105px;
  padding: 17px 13px;
  /* 吹き出しの丸み具合を変更 */
  border-radius: 12px;
  /* 吹き出しのカラーはここで変更 */
  background: #89fc7e;
}
/* 三角部分の作成 */
.talk01:after {
  content: "";
  display: inline-block;
  position: absolute;
  /* 三角の位置(高さ)を変更 */
  top: 18px;
  left: -24px;
  border: 12px solid transparent;
  /* 三角部分のカラーはここで変更 */
  border-right: 12px solid #89fc7e;
}
.talk01 p {
  margin: 0;
  padding: 0;
}
.comment-store-name {
  position: relative; /*相対位置*/
  padding-left: 1.2em; /*アイコン分のスペース*/
  line-height: 1.4; /*行高*/
}
.comment-store-name:before {
  font-family: "Font Awesome 5 Free";
  content: "\f075"; /*アイコンのユニコード*/
  font-weight: 900;
  position: absolute; /*絶対位置*/
  font-size: 1em; /*サイズ*/
  left: 0; /*アイコンの位置*/
  top: 0; /*アイコンの位置*/
  color: #5ab9ff; /*アイコン色*/
}
.comment-date {
  right: 10px;
  bottom: 5px;
  /* padding: 10px; */
  font-size: 1rem;
  color: #7c7c7c;
}

@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes caret {
  50% {
    border-color: transparent;
  }
}

.top-title {
  font-family: monospace;
  width: 11ch;
  border-right: 0.08em solid;
  overflow: hidden;
  font-size: 4em;
  white-space: nowrap;
  animation: typing 5s steps(11, end), caret 0.5s step-end infinite;
}
</style>
