<template>
  <div class="switch_content">
    <!-- <div v-for="(post, index) in this.posts" :key="index"> -->
      <input id="switch" type="checkbox" />
      <label class="button" for="switch">
        <span class="icon"></span>
        <span class="open">表示する</span>
        <span class="close">閉じる</span>
      </label>
      <div class="contents">
        <p>ニュース概要</p>
        <p>hogehogehoge</p>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "News001",
};
</script>

<style scoped>
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

.icon {
  /* アイコン全体のスタイル */
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-52%);
  width: 22px;
  height: 22px;
  border: 2px solid #333;
  border-radius: 50%;
}

.icon::before,
.icon::after {
  /* 「×」印のスタイル */
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px; /* 棒の幅（太さ） */
  height: 15px; /* 棒の高さ */
  background: #333; /* 棒の色 */
  transform: translate(-50%, -50%) rotate(90deg); /* デフォルトは「-」印に */
  transition: 0.5s all; /* クリック時のアニメーション設定 */
}

.open,
.close {
  margin-left: 27px;
}

.open {
  /* 表示ボタンのスタイル */
  display: inline-block; /* デフォルトは表示 */
}

.close {
  /* 閉じるボタンのスタイル */
  display: none; /* デフォルトは非表示 */
}

.contents {
  /* コンテンツのスタイル */
  display: none; /* デフォルトは非表示 */
  padding: 0 20px 15px;
}

/* 以降、チェック時（クリック後）のスタイル */

#switch:checked + .button > .icon::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

#switch:checked + .button > .icon::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

#switch:checked + .button > .open {
  display: none; /* 表示ボタンを非表示 */
}

#switch:checked + .button > .close {
  display: inline-block; /* 閉じるボタンを表示 */
}

#switch:checked ~ .contents {
  display: block; /* コンテンツを表示 */
}
</style>