const hello = {
    state: {
        count: 0,
        age: 18
    },
    mutations: {
        add(state, payload) {
            console.log('state', state, 'payload', payload);
            state.count += payload.count;
        },
        minus(state, payload) {
            state.count -= payload.count;
        }
    },
    getters: {
        newCount(state) {
            return state.count + 520;
        }
    },
    actions: {
        handleAdd({ state, commit, dispatch, rootState }) {
            console.log('state', state, 'rootState', rootState);
            state.count += Math.random();
            state.age += Math.random();
        }
    }
};

export default hello;
