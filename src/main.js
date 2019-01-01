import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Bmob from "hydrogen-js-sdk";
import store from "./store"

Vue.use (ElementUI)
Vue.use (VueResource)
Vue.use(VueRouter)

// 初始化
Bmob.initialize("f55ade4f1237ac340da36946d71978a5", "3c5e1d62391cc2f711845ab061215ee9");
// 挂载到全局使用
Vue.prototype.Bmob = Bmob

new Vue ({
    el: '#app',
    router:router,
    store:store,
    render: h => h (App)
})
