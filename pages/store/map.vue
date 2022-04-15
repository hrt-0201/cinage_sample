<template>
  <!-- <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <GmapMap
          map-type-id="roadmap"
          :center="maplocation"
          :zoom="zoom"
          :style="styleMap"
          :options="mapOptions"
        >
        </GmapMap>
      </v-card>
    </v-col>
  </v-row> -->
  <div>
    <Slidevar001 />
    <div class="map-view">
      <h2>近辺地図</h2>
      <div class="boxContainer">
        <iframe
          frameborder="0"
          style="border: 0; width: 500px; height: 600px"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBAoF4pFTZTIR9bY82_B3h_NoVGq5dYZw0&q=下野新聞社 本社"
          allowfullscreen
        >
        </iframe>
        <div class="todo">
          mapに追加したい要素
          <ul>
            <li>登録している店舗をピン止めで表示</li>
            <li>ピンの色を混雑状況に合わせて変更</li>
            <li>ピンをタップすると詳細が吹き出し表示</li>
            <li><i class="fas fa-terminal"></i>Google Mapの操作制限ができるかを調査必要</li>
            <li>店舗リストかた特定店舗より遷移すると経路を表示</li>
            <li>現在地はDBから取得した位置にする</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      maplocation: { lng: 0, lat: 0 },
      zoom: 4,
      styleMap: {
        width: "200px",
        height: "300px",
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
    };
  },
};
</script>

<style scoped>
.map-view {
  padding: 100px;
}
.boxContainer {
  display: flex;
}
.todo {
  padding-left: 20px;
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
  /* font-family: "Font Awesome 5 Free"; */
  content: "\f105"; /* <i class="fas fa-terminal"></i> */
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
</style>
