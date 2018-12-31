import Edite from './view/Edit.vue'
import Home from "./view/Home.vue"
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/edit',
        component: Edite
    },
    {
        path:"/",
        component:Home
    }
]
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})
export default router