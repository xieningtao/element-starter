import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Bmob from "hydrogen-js-sdk";
import store from "./store/photos"
import globals from "./view/Global.vue"
import VuePreview from 'vue-preview'
//another
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// defalut install
Vue.use(VuePreview,{
    shareEl:false
})

// // with parameters install
// Vue.use(preview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
// })

Vue.use (ElementUI)
Vue.use (VueResource)
Vue.use(VueRouter)

// 初始化
Bmob.initialize("f55ade4f1237ac340da36946d71978a5", "3c5e1d62391cc2f711845ab061215ee9");

// Bmob.initialize("55a1a92dd0096e5178ff10be85b06feb", "83c860ec56761949993c558c37a1cc45");
// 挂载到全局使用
Vue.prototype.Bmob = Bmob
Vue.prototype.GLOBAL = globals

new Vue ({
    el: '#app',
    router:router,
    store:store,
    render: h => h (App)
})
