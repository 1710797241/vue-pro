const state = {
    name: 'admin'
};

const mutations = {
    add(state, payload) {
        console.log('state', state, 'payload', payload);
        state.name += payload.name;
    }
};

const actions = {
    add(mutation, payload) {
        console.log('mutation', mutation, 'payload', payload);
        mutation.commit('add', payload);
    }
};

const getters = {
    newname: state => state.name + 'new'
};
export default { state, getters, mutations, actions };
