<template>
  <div class="store_info">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'50px'" :widthCollapsed="'50px'" />
    </div>
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
    <ul class="bl_flexContainer">
      <li class="el_flexItem" v-for="(post, index) in posts" :key="index">
        <ul class="store_info">
          <li>{{ post.store_name }}</li>
          <li>{{ post.info.holiday }}</li>
          <li>{{ post.info.time }}</li>
          <li>{{ post.address }}</li>
        </ul>
      </li>
    </ul>

    <div class="bl_media_container">
      <div class="bl_media_itemWrapper">
        <div class="bl_media_item">
          <p class="img"><img src="img/..." alt="" /></p>
          <h3>ダミータイトル</h3>
          <p>ダミーダミーダミーダミーダミーダミー</p>
        </div>
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
};
</script>

<style scoped>
.store_info {
  padding: 100px;
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
