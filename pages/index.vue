<!-- pages/index.vue -->
<template>
  <section class="container" @click="reset()">
    <Slidevar001/>
    <Slideshow />
    <Title001 />

    <h1>アプリの使い方</h1>
    <ul>
      <li>左のサイドメニューから閲覧したい情報を選んでください</li>
      <li>この画面はサイネージ初期画面を想定しています</li>
      <li>不具合や気になる箇所がありましたら教えてください</li>
    </ul>

    <h1>最新のニュース</h1>
    <News001 />

    <a href="https://master.d2m7f89l829cfb.amplifyapp.com/">AWS Amplify環境はこちらから</a>

    <h1>お店の最新のつぶやき</h1>
    <div v-for="comment in comments" :key="comment.update_date">
      <Baloon001 :store_image_url="comment.store_image_url" :store_name="comment.store_name" :comment="comment.comment" :update_date="comment.update_date" />
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
    <Popup-menu />
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const params = {
      OperationType: "COMMENT",
    };
    // 取得先のURL
    const url =
      "https://pjle7dwta5.execute-api.ap-northeast-1.amazonaws.com/APITest02/dynamodbctrl";
    // リクエスト（Post）
    const response = await $axios.$post(url, params).catch(function(error) {
        // エラー時の処理を書く
        console.log('ERROR!')
    });
    // 配列で返ってくるのでJSONにして返却
    // console.log(response);
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
  height: 1000vh;
  width: 100vw;
  background-color: #999999;
  color: #ffffcc;
  padding-top: 0px;
  padding-left: 100px;
  padding-right: 100px;
}

/* リストデザイン佣 */
ul {
  padding: 0;
}

ul li {
  width: 80vw;
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
  font-weight: 600; /*アイコンは太字にしない*/
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
</style>
