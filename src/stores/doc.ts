interface State {
    count: number;
}
interface Payload {
    count: number;
}
const doc = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        add(state: State, payload: Payload) {
            state.count += payload.count;
        },
        minus(state: State, payload: Payload) {
            state.count -= payload.count;
        }
    }
};
export default doc;
