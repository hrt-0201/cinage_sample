import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA6xOjBWlueQKKql5cvpFe8fx_dzfHl-EQ',
    libraries: 'places',
  },
})