const state = {
    allRepos:[]
}

const getters={

    allRepos(){
        return this.$store.allRepos
    }
}

const actions={
    addRepo({commit,state},item){
        commit("addRepo",{item})
    }
    ,

    storeAllRepo({commit},repos){
        commit("setRepo",repos)
    }
}

const mutations={
    addRepo(state,{item}){
        state.allRepos.push(item)
        console.info("allRepos: "+JSON.stringify(state.allRepos))
    },

    setRepo (state, repos) {
        state.allRepos = repos
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}