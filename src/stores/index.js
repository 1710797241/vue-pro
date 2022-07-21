import Vue from 'vue';
import Vuex from 'vuex';
import helloStore from './modules/hello';
import userStore from './modules/user';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        helloStore,
        userStore
    }
});
export default store;
