import Edite from './view/Edit.vue'
import Home from "./view/Home.vue"
import AddArticle from "./view/AddArticle.vue"
import ArticleDetail from "./view/ArticleDetail.vue"
import MainPage from "./view/MainPage.vue"
import HighHeeledShoesList from "./view/HighHeeledShoesList.vue"
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/edit',
        component: Edite
    },
    // {
    //     path: "/",
    //     component: Home
    // },
    {
      path:"/addArticle",
      component:AddArticle
    },
    {
        path: "/articleDetail/:id",
        component: ArticleDetail,
        name:"articleDetail"
    },
    {
        path: "/mainPage/:tag",
        component: MainPage,
        name:"mainPage"
    },
    {
        path: "/shoesList",
        component: HighHeeledShoesList,
        name:"shoesList"
    }
]
const router = new VueRouter ({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})
export default router