const root = {
    state: {
        count: 0
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
            return state.count + 520;
        }
    },
    actions: {
        add({ state, commit }, payload) {
            console.log('payload', payload);
            state.count += payload.count;
        }
    }
};
export default root;
