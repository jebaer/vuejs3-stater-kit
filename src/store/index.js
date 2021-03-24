import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import appStore from './modules/app';

const store = new Vuex.Store({
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
        }),
    ],
    modules: {
        appStore,
    },
});

export default store;
