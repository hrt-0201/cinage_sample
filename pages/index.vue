<!-- pages/index.vue -->
<template>
  <section class="container">
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'60px'" :widthCollapsed="'60px'" />
    </div>
    <h1>アプリの使い方</h1>
    <ul>
      <li>左のサイドメニューから閲覧したい情報を選んでください</li>
      <li>この画面はサイネージ初期画面を想定しています</li>
      <li>不具合や気になる箇所がありましたら教えてください</li>
    </ul>

    <h1>最新のニュース</h1>
    <div class="switch_content">
      <input id="switch" type="checkbox" />
      <label class="button" for="switch">
        <span class="icon"></span>
        <span class="open">表示する</span>
        <span class="close">閉じる</span>
      </label>
      <div class="contents">
        <p>ニュース概要</p>
      </div>
    </div>

    <h1>お店の最新のつぶやき</h1>

    <div class="weather" @click="show()">
      <a class="btn btn-custom01">
        <span class="btn-custom01-front">天気予報</span>
        <i class="fas fa-angle-right fa-position-right"></i>
      </a>
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
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      content: "",
      // TODO: サイドメニュー、コンポーネントにしたい
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
          hidden: true,
        },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        { href: "/sandbox", title: "", icon: "" },
        {
          href: "/",
          title: "",
          icon: "fas fa-tablet-alt fa-2x",
        },
        {
          href: "/store/v2",
          title: "",
          icon: "fas fa-beer fa-2x",
        },
        {
          href: "/store/map",
          title: "",
          icon: "far fa-map fa-2x",
        },
        {
          href: "/todo",
          title: "",
          icon: "fa fa-user fa-2x",
        },
        {
          href: "/store",
          title: "",
          icon: "fa fa-chart-area fa-2x",
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
  computed: {},
  methods: {
    show() {
      this.$modal.show("modal-content");
    },
    hide() {
      this.$modal.hide("modal-content");
    },
  },
};
</script>

<style scoped>
.container {
  padding: 100px;
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
  bottom: 50px;
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
/* 天気予報ボタンのデザイン */
/* TODO:　コードが長くなってしまったのでそのうちCSSの共通化かコンポーネント化する */
.btn,
a.btn,
button.btn {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}

a.btn-custom01 {
  margin-bottom: 0.5rem;
  padding: 0;
  border-radius: 0.75rem;
}

a.btn-custom01:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  content: "";
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: translate3d(0, 0.75rem, -1rem);
  transform: translate3d(0, 0.75rem, -1rem);

  border: 2px solid #000;
  border-radius: inherit;
  background: #ccc100;
  -webkit-box-shadow: 0 0.6rem 0 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.6rem 0 0 rgba(0, 0, 0, 0.2);
}

a.btn-custom01:after {
  font-family: "Font Awesome 5 Free";
  font-size: 2rem;
  font-weight: normal;
  line-height: 1;
  position: absolute;
  top: calc(50% - 1rem);
  left: 1.5rem;
  margin: 0;
  padding: 0;
  content: "\f0e0";
}

.btn-custom01-front {
  position: relative;
  display: block;
  padding: 1.5rem 5rem 1.5rem 5rem;

  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 2px solid #000;
  border-radius: inherit;
  background: #fff100;
}

.fa-position-left {
  position: absolute;
  top: calc(50% - 0.5em);
  left: 1rem;
}

.fa-position-right {
  position: absolute;
  top: calc(50% - 0.5em);
  right: 1rem;
}

a.btn-custom01:hover {
  -webkit-transform: translate(0, 0.25rem);
  transform: translate(0, 0.25rem);
  background: #fff100;
}

a.btn-custom01:hover:before {
  -webkit-transform: translate3d(0, 0.5rem, -1rem);
  transform: translate3d(0, 0.5rem, -1rem);
  -webkit-box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
}

a.btn-custom01:hover:after {
  content: "\f2b6";
}

a.btn-custom01:active {
  -webkit-transform: translate(0rem, 0.75rem);
  transform: translate(0rem, 0.75rem);
}

a.btn-custom01:active:before {
  -webkit-transform: translate3d(0, 0, -1rem);
  transform: translate3d(0, 0, -1rem);
  -webkit-box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
}

a.btn-custom01:active:after {
  content: "\f2b6";
}

/* アコーディオン部品のスタイル */
/* TODO: これも後々共通化する */
.switch_content {
  width: 400px; /* 全体の幅 */
  border: 1px solid #333; /* 全体を囲む枠線 */
}
 
#switch {
  display: none; /* チェックボックスを除去 */
}
 
.button {
  display: block;
  position: relative;
  padding: 10px 20px;
}
 
.icon { /* アイコン全体のスタイル */
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-52%);
  width: 22px;
  height: 22px;
  border: 2px solid #333;
  border-radius: 50%;
}
 
.icon::before, .icon::after{ /* 「×」印のスタイル */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px; /* 棒の幅（太さ） */
  height: 15px; /* 棒の高さ */
  background: #333; /* 棒の色 */
  transform: translate(-50%,-50%) rotate(90deg); /* デフォルトは「-」印に */
  transition: 0.5s all; /* クリック時のアニメーション設定 */
}
 
.open,.close {
  margin-left: 27px;
}
 
.open { /* 表示ボタンのスタイル */
  display: inline-block; /* デフォルトは表示 */
}
 
.close { /* 閉じるボタンのスタイル */
  display: none; /* デフォルトは非表示 */
}
 
.contents { /* コンテンツのスタイル */
  display: none; /* デフォルトは非表示 */
  padding: 0 20px 15px;
}
 
 /* 以降、チェック時（クリック後）のスタイル */
 
#switch:checked + .button > .icon::before{
  transform: translate(-50%,-50%) rotate(45deg);
}
 
#switch:checked + .button > .icon::after{
  transform: translate(-50%,-50%) rotate(-45deg);
}
 
#switch:checked + .button > .open{
  display: none; /* 表示ボタンを非表示 */
}
 
#switch:checked + .button > .close{
  display: inline-block; /* 閉じるボタンを表示 */
}
 
#switch:checked ~ .contents {
  display: block; /* コンテンツを表示 */
}
</style>
