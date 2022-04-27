<template>
  <div class="balloon01 change-time15 fadeUp">
    <div class="icon01">
      <img :src="store_image_url" />
    </div>
    <div class="chat01">
      <div class="talk01">
        <div class="comment-store-name">{{ store_name }}</div>
        <p class="comment-store-message">{{ comment }}</p>
        <div class="comment-date">投稿日時：{{ update_date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["store_image_url", "store_name", "comment", "update_date"],
  name: "Baloon001",
};
</script>

<style scoped>
/* つぶやき吹き出しのスタイリング */
/* 全体の設定 */
.balloon01 {
  width: 100%;
  color: #000000;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* アイコンの枠の太さ、カラーはここで変更 */
  border: solid 3px #333300;
  object-fit: cover;
}
.balloon01 .chat01 {
  width: 100%;
}
/* 吹き出しの入力部分の作成 */
.talk01 {
  /* この部分を外すと横幅いっぱいになります */
  /* display: inline-block; */
  position: relative;
  margin: 5px 0 0 130px;
  padding: 17px 25px;
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
  padding-left: 1.5em; /*アイコン分のスペース*/
  line-height: 2; /*行高*/
  font-size: 1.5rem;
  font-weight: 700;
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
.comment-store-message {
    line-height: 2; /*行高*/
  font-size: 2rem;
}
.comment-date {
  right: 10px;
  bottom: 5px;
  /* padding: 10px; */
  font-size: 1rem;
  color: #7c7c7c;
}
</style>