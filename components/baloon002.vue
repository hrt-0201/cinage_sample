<template>
  <!-- <div class="balloon01 right change-time15 fadeUp">
    <div class="icon01">
      <img :src="store_image_url" />
    </div>
    <div class="chat01">
      <div class="talk01">
        <div class="comment-store-name">{{ store_name }}</div>
        <p>{{ comment }}</p>
        <div class="comment-date">投稿日時：{{ update_date }}</div>
      </div>
    </div>
  </div> -->
  <!-- 右の吹き出し -->
<!-- 左の吹き出し -->
<div>
  <div class="balloon-chat left">
  <figure class="icon-img"><img :src="store_image_url" alt="代替えテキスト" >
    <figcaption class="icon-name">{{store_name}}</figcaption>
  </figure>
  <div class="chatting">
    <p class="chat-text">テキストを入力</p>
  </div>
</div>
<!-- 右の吹き出し -->
<div class="balloon-chat right">
  <figure class="icon-img"><img :src="store_image_url" alt="代替えテキスト" >
    <figcaption class="icon-name">{{store_name}}</figcaption>
  </figure>
  <div class="chatting">
    <p class="chat-text">テキストを入力<br>（改行）
    テキストを入力</p>
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

.balloon-chat {
display: flex;
flex-wrap: wrap;
}
/* 左の吹き出し */
.balloon-chat.left { 
flex-direction: row; /* 左から右に並べる */
}
/* 右の吹き出し */
.balloon-chat.right { 
flex-direction: row-reverse; /* 右から左に並べる */
}
/* 吹き出しの入力部分の作成 */
.chatting {
position: relative;
display: inline-block; /* 吹き出しが文字幅に合わせます */ 
margin: 10px 20px;
padding: 10px 20px;
background: #ccffcc; /* 吹き出しのカラーはここで変更 */
text-align: left; /* テキストの位置はここで変更 */
border-radius: 12px; /* 吹き出しの丸み具合を変更 */
}
/* 吹き出しの三角部分の作成 */
.chatting::after {
content: "";
border: 15px solid transparent;
border-top-color: #ccffcc; /* カラーはここで変更（吹き出し部分と合わせる）*/
position: absolute;
top: 10px; /* 三角部分の高さを変更 */
}

.right .chatting::after {
right: -15px; /* 右側の三角部分の位置を変更 */
} 
/* アイコンの作成 */
.balloon-chat figure img {
border-radius: 50%; /* 丸の設定 */
border: 2px solid #333300; /* アイコンの枠のカラーと太さはここで変更 */
margin: 0;
}
/* アイコンの大きさ */
.icon-img {
width: 80px;
height: 80px;
}
.icon-img img {
width: 80px;
height: 80px;
}
/* アイコンの名前の設定 */
.icon-name {
width: 80px; /* アイコンの大きさと合わせる */
font-size: 12px;
text-align: center;
}
</style>