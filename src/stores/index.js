import Vue from 'vue';
import Vuex from 'vuex';
import helloStore from './modules/hello';
import userStore from './modules/user';
import rootStore from './root';
Vue.use(Vuex);

const store = new Vuex.Store({
    ...rootStore,
    modules: {
        helloStore,
        userStore
    }
});
export default store;
