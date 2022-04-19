<template>
  <div class="bl_media_container">
    <Slidevar001 />

    <div
      class="bl_media_itemWrapper"
      v-for="(post, index) in posts"
      :key="index"
    >
      <div class="bl_media_item">
        <div class="img">
          <div v-if="post.manage.seat == '01'">
            <div class="store-image"><img :src="post.store_image_url" alt="" /></div>
          </div>
          <div v-if="post.manage.seat == '02'">
            <div class="store-image"><img :src="post.store_image_url" alt="" /></div>
          </div>
          <div v-if="post.manage.seat == '03'">
            <div class="store-image"><img :src="post.store_image_url" alt="" /></div>
          </div>
        </div>
        <!-- お店詳細を別画面にする場合は以下を活性化する -->
        <!-- <nuxt-link :to="post.store_id" class="cardlink"></nuxt-link> -->
        <div @click="show(post.store_id)" class="cardlink"></div>
        <!-- <button @click="show(post.store_id)" class="cardlink">クリックする</button> -->
        <!-- 以下がモーダル画面のエリア -->
        <modal
          :name="'modal-content' + post.store_id"
          :width="600"
          :height="900"
          :adaptive="true"
        >
          <!-- モーダルの閉じるボタン -->
          <div @click="hide(post.store_id)" class="round_btn"></div>
          <div class="storeInfo">
            <p class="img">
              <img :src="post.store_image_url" alt="" />
            </p>
            <h3>{{ post.store_name }}</h3>
            <p>定休日：{{ post.info.holiday }}</p>
            <p>営業時間：{{ post.info.time }}</p>
            <p>住所：{{ post.address }}</p>
            <p>詳細：{{ post.description }}</p>
          </div>
          <div class="congestion">
            <p>混雑状況</p>
            <p v-if="post.manage.seat == '01'" class="vacancy">空席</p>
            <p v-if="post.manage.seat == '02'" class="normal">普通</p>
            <p v-if="post.manage.seat == '03'" class="crowded">混雑</p>
          </div>
          <div v-for="(comment, index) in comments" :key="index">
            <div v-if="comment.store_id == post.store_id">
              <div class="store_message">
                <p>{{ comment.comment }}</p>
                <div class="comment-date">
                  投稿日時：{{ comment.update_date }}
                </div>
              </div>
            </div>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const params = {
      OperationType: "SCAN",
    };
    // 取得先のURL
    const url =
      "https://pjle7dwta5.execute-api.ap-northeast-1.amazonaws.com/APITest02/dynamodbctrl";
    // リクエスト（Post）
    const response = await $axios.$post(url, params);
    // 配列で返ってくるのでJSONにして返却
    console.log(response);

    const comment_params = {
      OperationType: "COMMENT",
    };
    // リクエスト（Post）
    const response_comment = await $axios.$post(url, comment_params);
    // 配列で返ってくるのでJSONにして返却
    console.log(response);
    return {
      posts: response.Items,
      comments: response_comment.Items,
    };
  },

  data: () => {
    return {
      content: "",
    };
  },
  methods: {
    show(id) {
      this.$modal.show("modal-content" + id);
    },
    hide(id) {
      this.$modal.hide("modal-content" + id);
    },
  },
};
</script>

<style scoped>
/* BASE CSS */
* {
  list-style: none;
  box-sizing: border-box;
  /* font-family: "Font Awesome 5 Free",'Quicksand','Avenir','Arial',sans-serif; */
  margin: 0;
  padding: 0;
}
img {
  width: 100%;
  height: 300px;
  vertical-align: bottom;
  object-fit: cover;
}
/* ここからカードレイアウトのスタイリング */
/* PC　3カラム */
.bl_media_container {
  display: flex;
  flex-wrap: wrap;
  margin: calc(-30px / 2);
  padding: 10px;
  padding-left: 60px;
}
.bl_media_itemWrapper {
  width: calc(100% / 3 - 30px);
  margin: calc(30px / 2);
}

.bl_media_item {
  position: relative;
  outline: 1px solid #000;
  font-size: 1.5vw;
}
/* タブレット　2カラム */
@media screen and (max-width: 1024px) {
  .bl_media_itemWrapper {
    width: calc(100% / 2 - 30px);
  }
}
/* スマホ 1カラム*/
@media screen and (max-width: 599px) {
  .bl_media_itemWrapper {
    width: calc(100% / 1 - 30px);
  }
}

/* 見出しのスタイリング */
.storeInfo {
  padding: 20px;
}
h3 {
  position: relative;
  padding-left: 1.2em; /*アイコン分のスペース*/
  line-height: 1.4;
}

h3:before {
  font-family: "Font Awesome 5 Free";
  content: "\f805"; /*アイコンのユニコード*/
  font-weight: 900;
  position: absolute; /*絶対位置*/
  font-size: 1em; /*サイズ*/
  left: 0; /*アイコンの位置*/
  top: 0; /*アイコンの位置*/
  color: #ffbd5a; /*アイコン色*/
}

/* ここから混雑状況のスタイリング */
.congestion {
  text-align: right;
  padding: 10px;
}
.vacancy {
  color: blue;
}
.normal {
  color: black;
}
.crowded {
  color: red;
  font-weight: 1000;
}
/* 画像にかぶせる混雑状況のスタイリング */
.store-image{
  position: relative;
  background-color: aliceblue;
  width: 100%;
  max-width: 384px;
  margin: 60px auto;
  aspect-ratio: 16/9;
}

.store-image::before{
    position: absolute;
    content: "空席";
    top: 0;
    right: 0;
    background-color: crimson;
    padding: 5px 25px;
}

.bl_media_item .cardlink {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

/* ここから店舗メッセージの吹き出しスタイル */
.store_message {
  position: relative;
  padding: 1.5rem 2rem;
  border: 3px solid #d8d8d8;
  border-radius: 10px;
  background: #f9f9f9;
}
.store_message:before {
  position: absolute;
  bottom: -14px;
  left: 1em;
  width: 0;
  height: 0;
  content: "";
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
}

.store_message:after {
  position: absolute;
  bottom: -10px;
  left: 1em;
  width: 0;
  height: 0;
  content: "";
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #f9f9f9 transparent transparent transparent;
}
</style>
