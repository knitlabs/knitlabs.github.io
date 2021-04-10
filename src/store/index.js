import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentPage: 'Home'
    },
    mutations: {
        changePage(state, pageName){
            state.currentPage = pageName;
        }
    },
    actions: {
    }
})