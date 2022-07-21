const root = {
    state: {
        token: '123456789'
    },
    mutations: {
        setToken(state) {
            state.token = new Date().getTime();
        }
    }
};
export default root;
