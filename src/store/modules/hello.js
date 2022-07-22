const hello = {
    namespaced: true,
    state: {
        count: 2
    },
    mutations: {
        add(state, payload) {
            state.count += payload.count;
        },
        minus(state, payload) {
            state.count -= payload.count;
        }
    },
    getters: {
        newCount(state) {
            return state.count + 5200;
        }
    },
    actions: {
        add({ state, commit }, payload) {
            console.log('payload', payload);
            state.count += payload.count;
        }
    }
};
export default hello;
