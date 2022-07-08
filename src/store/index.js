import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    pushArray (contxt,value){
        let array = value.split(' ')
        let set = new Set()
        array.forEach((item)=>{set.add(item)})
        let a = Array.from(set)
        a.sort((a,b)=>{return a-b})
        contxt.commit('PUSHARRAY',a)
        console.log(a)
    }
}

const mutations = {
    PUSHARRAY (state,value){
        let a = []
        state.array1 = a.concat(value)
        console.log('sss',value)
    }
}

const state = {
    array1: [],
}

const getters = {

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})