import Edite from './view/Edit.vue'
import Home from "./view/Home.vue"
import FunHome from "./view/fun/NewFunHome.vue"
import AddArticle from "./view/AddArticle.vue"
import ArticleDetail from "./view/ArticleDetail.vue"
import MainPage from "./view/fun/MainPage.vue"
import FunnyStory from "./view/fun/FunnyStoryList.vue"
import HighHeeledShoesList from "./view/fun/HighHeeledShoesList.vue"
import FunnyStoryDetail from "./view/fun/FunnyStoryDetail.vue"
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/edit',
        component: Edite
    },
    {
        path:"/home",
        component: Home,
        name:"home"
    },
    {
        path: "/",
        component: FunHome,
        children: [
            {
                path: "mainPage/:tag",
                component: MainPage,
                name: "mainPage"
            },
            {
                path: "shoesList",
                component: HighHeeledShoesList,
                name: "shoesList"
            }, {
                path: "funnyStory",
                component: FunnyStory,
                name: "funnyStory"
            }
        ]
    },
    {
        path: "/addArticle",
        component: AddArticle
    },
    {
        path: "/articleDetail/:id",
        component: ArticleDetail,
        name: "articleDetail"
    }, {
        path: "/funnyStoryDetail/:id",
        component: FunnyStoryDetail,
        name: "funnyStoryDetail"
    }
]
const router = new VueRouter ({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})
export default router