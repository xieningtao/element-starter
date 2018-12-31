import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.use (ElementUI)
Vue.use (VueResource)
Vue.use(VueRouter)

new Vue ({
    el: '#app',
    router:router,
    render: h => h (App)
})
