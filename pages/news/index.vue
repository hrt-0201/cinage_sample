<template>
  <div class="news-base">
    <Slidevar001 />
    <Title004 message="Today News!!!" />
    <!-- {{ this.messages }}
    <div @click="reload()">reload</div> -->

    <div class="container">
      <div class="row pt-5 m-auto">
        <div
          class="col-md-6 col-lg-4 pb-3"
          v-for="(post, index) in posts"
          :key="index"
        >
          <!-- Copy the content below until next comment -->
          <div
            class="card card-custom bg-white border-white border-0"
            @click="show(index)"
          >
            <span v-if="post.custom">
              <div
                class="card-custom-img"
                :style="'background-image: url(' + post.custom.image + ');'"
              ></div>
            </span>
            <span v-else
              ><div
                class="card-custom-img"
                style="
                  background-image: url(https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/logo/noimage.png);
                "
              ></div
            ></span>
            <div class="card-custom-avatar">
              <img
                class="img-fluid"
                src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/logo/soon.png"
                alt="Avatar"
              />
            </div>
            <div class="card-body" style="overflow-y: auto">
              <h5 class="card-title">{{ post.title }}</h5>
            </div>
            <div
              class="card-footer"
              style="background: inherit; border-color: inherit"
            >
              <div class="btn btn-primary">Option</div>
              <a href="#" class="btn btn-outline-primary">Other option</a>
            </div>
            <!-- 以下がモーダル画面のエリア -->
            <modal
              :name="'modal-content' + index"
              :width="800"
              height=auto
              :adaptive="true"
            >
              <!-- モーダルの閉じるボタン -->
              <div @click="hide(index)" class="round_btn"></div>
              <div class="newsInfo">
                <span v-if="post.custom" class="modal-img">
                  <img :src="post.custom.image" alt="" />
                </span>
                <span v-else class="modal-img">
                  <img src="https://line-store-info-dev.s3.ap-northeast-1.amazonaws.com/logo/noimage.png" alt="" />
                </span>
                <h3>{{ post.title }}</h3>
                <p class="card-text">
                  {{ post.description }}
                </p>
                <h6>↓さらに詳しい記事は以下のQRコードを読み込んでください</h6>
                <qrcode :value="post.link" :options="{ width: 300 }" />
              </div>
            </modal>
          </div>
          <!-- Copy until here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    console.log("########## 1");
    const params = {
      body: "usmart",
    };
    console.log("########## 2");
    // 取得先のURL
    const url =
      "https://57u2y22k2j.execute-api.ap-northeast-1.amazonaws.com/dev/soongetrss";
    console.log("########## 3");
    // リクエスト（Get）
    const response = await $axios.$post(url, params).catch(function (error) {
      // エラー時の処理を書く
      console.error("ERROR!");
      return { messages: "error" };
    });
    // console.log("########## 4");
    // 配列で返ってくるのでJSONにして返却
    // console.log(response);
    // console.log("########## 4-1");

    // レスポンスのオブジェクトをStrに変換
    // var convertJson = JSON.stringify(response);
    // デバッグログ
    // console.log(typeof(convertJson));
    // console.log(convertJson);

    // 変換したレスポンス文字列から改行コードを削除
    // var replaceRes = convertJson.replace(/\r?\n/g, "");
    // デバッグログ
    // console.log(replaceRes);
    // console.log("########## 4-1-1");

    // 改行コードを削除したレスポンス文字列をJSONに戻す
    // var revertJson = JSON.parse(replaceRes);
    // デバッグログ
    // console.log(typeof(revertJson));
    // console.log(revertJson);
    // console.log("########## 4-2");
    // for (let post in revertJson) {
    //   console.log("### 要素AAA:" + revertJson[post].title);
    //   // var obj = JSON.parse(post)
    //   // console.log("### parse:" + obj)
    //   try {
    //     console.log("########## 5");
    //     const res = await $axios.get(
    //       "https://www.shimotsuke.co.jp/articles/-/578580"
    //     );
    //     const html = res.data;
    //     // console.log("########## 5-1" + html);
    //   } catch (error) {
    //     console.log("########## 6");
    //     console.error(error);
    //   }
    // }

    for (let post in response) {
      if (response[post].custom === undefined) {
        // console.info("########## 要素がundefinedのためcontinue");
        continue;
      }
      // console.info("########## 区切り線");
      var image_url_obj = response[post].custom;
      // console.info("要素：" + image_url_obj);
      // console.info("要素url：" + image_url_obj.image);
    }

    return {
      posts: response.slice(0, 20),
    };
  },

  data: () => {
    return {
      content: "",
      messages: "hogehoge",
    };
  },
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,500&amp;subset=latin-ext",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
    ],
  },
  computed: {},
  methods: {
    reload() {
      location.reload();
    },
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
.news-base {
  padding-left: 80px;
}

/* 記事一覧のCSS（いっそのこと一覧事態をコンポーネント化したほうが後々よさそう） */
.card-title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-text {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.card-custom {
  overflow: hidden;
  min-height: 250px;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
}

.custom .cardlink {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card-custom-img {
  height: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: inherit;
}

/* First border-left-width setting is a fallback */
.card-custom-img::after {
  position: absolute;
  content: "";
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: white;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
  position: absolute;
  top: 100px;
  left: 1.25rem;
  width: 100px;
  height: 100px;
}
/* 記事一覧のCSS　↑ここまで */

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
