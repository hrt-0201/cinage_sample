<template>
  <div class="base">
    <Slidevar001/>
    <h1>サンドボックスの部屋</h1>

    <!-- <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img
          src="./andre-tan-fGEEJ7Z8cIA-unsplash.jpg"
          width="300"
          height="200"
          alt=""
        /><br />
        <a :href="'post.url'" target="_blank" rel="noopener noreferrer">{{
          post.name
        }}</a>
      </li>
    </ul> -->

    <h2>◇コンポーネント群</h2>
    
    <p>############################################################################</p>
    <br>
    <Line001 />
    <br>
    <p>↑News文字列は背景色を画面背景と同じにすることで線に埋め込まれているように表現しているのでこのcomponentsを利用する際は上下の空白を入れるように気を付ける</p>
    <p>############################################################################</p>
    <br>
    <Line002 />
    <br>
    <p>↑ハサミ画像は背景色を画面背景と同じにすることで線に埋め込まれているように表現しているのでこのcomponentsを利用する際は上下の空白を入れるように気を付ける</p>
    <p>############################################################################</p>
    <logo3d />
    <br />
    <p>↑サイネージではタップすると色が変わり、ロゴ外をタップすると色が戻る（モーダルと同じ）</p>
    <p>############################################################################</p>
    <Logo3d002/>
    <p>↑サイネージではタップすると開き、ロゴ外をタップすると閉じる（モーダルと同じ）</p>
    <p>############################################################################</p>
    <Logo3d002-2/>
    <p>↑クリックしつづけると開き、離すと閉じる</p>
    <p>↑クリックすると開き、もう一回クリックすると閉じるようにしたいがcheckedがうまく効かないので調整中</p>
    <p>############################################################################</p>
    <!-- <Logo3d003/> -->
    <p>############################################################################</p>
    <Logo3d004/>
    <p>↑マウスオーバーで角材のように動くアニメーション</p>
    <p>↑動作不安定、かつテキストが載せられない、、、</p>
    <p>############################################################################</p>
    <Scroll001/>
    <p>############################################################################</p>
    <Scroll002/>
    <p>############################################################################</p>
    <Scroll003/>
    <p>############################################################################</p>
    <WeatherSwitch />
    <br /><br />
    <p>↑ボタンデザインのみ、振る舞いや位置については利用可所にて定義する</p>
    <p>############################################################################</p>
    <Sakura />
    <br />
    <p>↑桜が散るだけのアニメーション</p>
    <p>############################################################################</p>
    <Countdown />
    <br />
    <p>↑映画開始前カウントダウン風のアニメーション</p>
    <p>############################################################################</p>
    <Title002 message="ふわゆら" />
    <p>↑ふわふわ動くテキスト</p>
    <p>############################################################################</p>
    <Title003 message="よこーに線が広がる" />
    <p>############################################################################</p>
    <Title004 message="テキスト切断🤣！！！" />
    <p>############################################################################</p>
    <Title005 message="何もないところからテキストを表示する" />
    <p>############################################################################</p>
    <Title006 header_message="Title Message" message="背景がグラデーション演出する" />
    <p>↑CSSでz-indexをいろいろ設定しているので利用時は他の部品とかぶらないか注意</p>
    <p>############################################################################</p>
    <Baloon001 store_image_url="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/logo/noimage.png" store_name="ほげほげ" comment="こんにちは！！！" update_date="2022/04/22" />
    <p>↑Line風吹き出しのコンポーネント</p>
    <p>############################################################################</p>
    <Baloon002 store_image_url="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/logo/noimage.png" store_name="ほげほげ" comment="こんにちは！！！" update_date="2022/04/22" />
    <p>↑Line風吹き出しのコンポーネント(右寄せ)</p>
    <p>############################################################################</p>
    <Caption001 message="背景緑の吹き出し風見出し"/>
    <p>############################################################################</p>
    <Caption002 message="下線のみの吹き出し風見出し"/>
    <p>############################################################################</p>
    <Caption003 message="最初の一文字を強調した見出し"/>
    <p>############################################################################</p>
    <Caption004 message="考え事をしているような見出し"/>

    <!-- <ul class="bl_flexContainer">
      <li class="el_flexItem" v-for="(post, index) in posts" :key="index">
        <ul class="store_info">
          <li>{{ post.store_name }}</li>
          <li>{{ post.info.holiday }}</li>
          <li>{{ post.info.time }}</li>
          <li>{{ post.address }}</li>
        </ul>
      </li>
    </ul> -->

    <h2>◇なんかCSSの練習とか</h2>
    <div class="bl_media_container">
      <div class="bl_media_itemWrapper">
        <div class="bl_media_item">
          <h3>ダミータイトル</h3>
          <p>ダミーダミーダミーダミーダミーダミー</p>
        </div>
      </div>
    </div>

    <h2>◇命名規則</h2>
    <ul class="parentul">
      <li class="parentli">componentsは必ずexport defaultし、大文字スタートで利用できるようにすること</li>
      <li class="parentli">styleタグには必ずscopedをつけ、他の画面、コンポーネントに影響しないようにすること</li>
      <ul class="nestlistul">
        <li class="nestlistli">全体に反映させたいCSSはnuxt.config.jsに定義する</li>
      </ul>
    </ul>
    <Popup-menu />
  </div>
</template>

<script>
export default {
  // TODO: リクエスト減らすためコメント（サンドボックスなので必要な時のみ）
  // async asyncData({ $axios }) {
  //   const params = {
  //     OperationType: "SCAN",
  //   };
  //   // 取得先のURL
  //   const url =
  //     "https://pjle7dwta5.execute-api.ap-northeast-1.amazonaws.com/APITest02/dynamodbctrl";
  //   // リクエスト（Post）
  //   const response = await $axios.$post(url, params);
  //   // 配列で返ってくるのでJSONにして返却
  //   console.log(response);
  //   return {
  //     posts: response.Items,
  //   };
  // },

  data: () => {
    return {
      content: "",
    };
  },
};
</script>

<style scoped>
.base {
  background-color: #999999;
  width: 100vw;
  padding: 100px;
}
p {
  font-size: 3px;
}
/* ul {
  display: flex;
  justify-content: center;
}

li {
  list-style: none;
}

li:nth-child(2) {
  margin: 0 10px;
} */

.bl_flexContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  list-style: none;
}
.el_flexItem {
  width: calc(100% / 3 - 40px / 3);
  height: 300px;
  margin-right: 20px;
  margin-bottom: 30px;
  background-color: royalblue;
}
.el_flexItem:nth-of-type(3n) {
  margin-right: 0;
}

@media screen and (max-width: 599px) {
  .el_flexItem {
    width: calc(100% / 2 - 20px / 2);
  }
  /* スタイルの打ち消し */
  .el_flexItem:nth-of-type(3n) {
    margin-right: 20px;
  }
  .el_flexItem:nth-of-type(2n) {
    margin-right: 0;
  }
}

.parentul {
  border: double 4px #21b384;
  padding: 0.5em 1em 0.5em 2.3em;
  position: relative;
}
.parentli {
  line-height: 1.5;
  padding: 0.5em 0;
  list-style-type: none!important;/*ポチ消す*/
}
.parentli:before {
  font-family: "Font Awesome 5 Free";
  content: "\f0a4";
  position: absolute;
  left : 1em; /*左端からのアイコンまで*/
  color: #21b384; /*アイコン色*/
}

.nestlistul {
  padding: 0;
}

.nestlistli {
  color: #404040;
  border-left: solid 6px #1fa67a;/*左側の線*/
  border-bottom: solid 2px #dadada;/*下に灰色線*/
  background: whitesmoke;
  margin-bottom: 5px;/*下のバーとの余白*/
  line-height: 1.0;
  padding: 0.5em;
  list-style-type: none!important;/*ポチ消す*/
  /* font-weight: bold; */
  font-size: 15px;
}
</style>
