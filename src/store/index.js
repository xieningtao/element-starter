import repos from './modules/repos'
import version from './modules/version'
import Vuex from "vuex"
import Vue from 'vue'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
export default new Vuex.Store({
    modules: {
        repos,
        version
    },
    plugins: [vuexLocal.plugin]
})