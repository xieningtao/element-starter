import Edite from './view/Edit.vue'
import Home from "./view/Home.vue"
import FunHome from "./view/fun/NewFunHome.vue"
import SaveMD from "./view/SaveMD.vue"
import ArticleDetail from "./view/ArticleDetail.vue"
import MainPage from "./view/fun/MainPage.vue"
import FunnyStory from "./view/fun/FunnyStoryList.vue"
import FlatFunnyStoryList from "./view/fun/FlatFunnyStoryList.vue"
import HighHeeledShoesList from "./view/fun/HighHeeledShoesList.vue"
import HighHeeledShoesDetail from "./view/fun/HighHeeledShoesDetail.vue"
import FunnyStoryDetail from "./view/fun/FunnyStoryDetail.vue"
import ErrorInfo from "./view/fun/ErrorInfo.vue"
import PhotoPreview from "./view/fun/PhotoPreview.vue"
import UploadPhotos from "./view/fun/UploadPhotos.vue"
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/edit',
        component: Edite
    },
    {
        path: "/home",
        component: Home,
        name: "home"
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
            }, {
                path: "flatFunnyStoryList",
                component: FlatFunnyStoryList,
                name: "flatFunnyStoryList"
            }
        ]
    },
    {
        path: "/PhotoPreview/:index",
        component: PhotoPreview,
        name: "photoPreview"
    },
    {
        path: "/saveMD",
        component: SaveMD,
        name: "saveMD"
    },
    {
        path: "/articleDetail/:id",
        component: ArticleDetail,
        name: "articleDetail"
    }, {
        path: "/shoesDetail/:id",
        component: HighHeeledShoesDetail,
        name: "shoesDetail"
    }, {
        path: "/funnyStoryDetail/:id",
        component: FunnyStoryDetail,
        name: "funnyStoryDetail"
    }, {
        path: "/errorinfo",
        component: ErrorInfo,
        name: "errorInfo"
    }, {
        path: "/uploadPhotos",
        component: UploadPhotos,
        name: "uploadPhotos"
    }
]
const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})

router.beforeEach((to, from, next) => {
    debugger
    if (to.matched.length === 0) {
        from.name ? next({
            name: from.name
        }) : next('/errorinfo');
    } else {
        next(); //如果匹配到正确跳转
    }
});
export default router