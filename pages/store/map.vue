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
    <div class="sidebar-container">
      <sidebar-menu :menu="menu" :width="'60px'" :widthCollapsed="'60px'" />
    </div>
    <div class="map-view">
      <h2>近辺地図</h2>
      <iframe
        frameborder="0"
        style="border: 0; width: 80%; height: 200vh"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBAoF4pFTZTIR9bY82_B3h_NoVGq5dYZw0&q=下野新聞社 本社"
        allowfullscreen
      >
      </iframe>
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
        width: "100%",
        height: "400px",
      },
      mapOptions: {
        streetViewControl: false,
        styles: [],
      },
      // TODO: サイドメニュー、コンポーネントにしたい
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true,
          hidden: true,
        },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
        { href: "/sandbox", title: "", icon: "", },
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
};
</script>

<style scoped>
.map-view {
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
</style>
