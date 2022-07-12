import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    num: 0
};

const mutations = {
    add(state, payload) {
        console.log('state', state, 'payload', payload);
        state.num += payload.num;
    }
};

const actions = {
    add(mutation, payload) {
        console.log('mutation', mutation, 'payload', payload);
        mutation.commit('add', payload);
    }
};

const getters = {
    newNum: state => state.num + 'new'
};
export default new Vuex.Store({ state, getters, mutations, actions });
