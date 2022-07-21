import Vue from 'vue';
import Vuex from 'vuex';
import helloStore from './modules/hello';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        helloStore
    }
});
export default store;
