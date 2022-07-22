import { createStore } from 'vuex';
import root from './root';
import hello from './modules/hello';
const store = createStore({
    ...root,
    modules: {
        hello
    }
});
export default store;
