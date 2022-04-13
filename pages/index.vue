<template>
  <div class="bl_media_container">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'50px'" :widthCollapsed="'50px'" />
    </div>

    <div
      class="bl_media_itemWrapper"
      v-for="(post, index) in posts"
      :key="index"
    >
      <div class="bl_media_item">
        <p class="img">
          <img :src="post.store_image_url" alt="" />
        </p>
        <!-- お店詳細を別画面にする場合は以下を活性化する -->
        <!-- <nuxt-link :to="post.store_id" class="cardlink"></nuxt-link> -->
        <div @click="show(post.store_id)" class="cardlink"></div>
        <div class="storeInfo">
          <h3>{{ post.store_name }}</h3>
          <p>TODO:ここに現在時間と定休日から現在営業中かを表示</p>
        </div>
        <div class="congestion">
          <p>混雑状況</p>
          <p v-if="post.manage.seat == '01'" class="vacancy">空席</p>
          <p v-if="post.manage.seat == '02'" class="normal">普通</p>
          <p v-if="post.manage.seat == '03'" class="crowded">混雑</p>
        </div>
        <!-- <button @click="show(post.store_id)" class="cardlink">クリックする</button> -->
        <modal :name="'modal-content' + post.store_id" :width="600" :height="900" :adaptive="true">
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
    return {
      posts: response.Items,
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
  vertical-align: bottom;
}
/* ここからカードレイアウトのスタイリング */
/* PC　3カラム */
.bl_media_container {
  display: flex;
  flex-wrap: wrap;
  margin: calc(-30px / 2);
  padding: 30px;
  padding-left: 50px;
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
  padding: 10px;
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

.bl_media_item .cardlink {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
