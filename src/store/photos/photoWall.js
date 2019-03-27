const state = {
    photos:[]
}

const getters={

    allPhotos(){
        return this.$store.photos
    }
}

const actions={
    addPhoto({commit},item){
        commit("addPhoto",{item})
    }
    ,

    storeAllPhotos({commit},photos){
        debugger
        commit("setPhotos",photos)
        console.info("storeAllPhotos: "+JSON.stringify(photos))
    }
}

const mutations={
    addPhoto(state,{item}){
        state.photos.push(item)
        console.info("allPhotos: "+JSON.stringify(state.photos))
    },

    setPhotos (state, photos) {
        state.photos = photos
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}