import Vue from 'vue'
import 'vant/lib/index.css'
import {
  Search,
  Popup,
  Icon,
  Toast
} from 'vant'
// @ts-ignore
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.5,
    tapToClose: true,
    tapToToggleControls: false
})
Vue.use(Search)
Vue.use(Popup)
Vue.use(Icon)
Vue.use(Toast)
