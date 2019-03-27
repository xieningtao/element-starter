import photoWall from './photoWall'
import Vuex from "vuex"
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
    modules: {
        photoWall
    },
    plugins: [vuexLocal.plugin]
})