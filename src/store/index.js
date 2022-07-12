import Vue from 'vue';
import Vuex from 'vuex';
import singleStore from './global';
import helloStore from './hellow-module';
console.log('singleStore', singleStore);
Vue.use(Vuex);
export default new Vuex.Store({
    ...singleStore,
    modules: {
        helloStore
    }
});
