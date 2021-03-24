import { reactive, readonly } from 'vue';
import * as _ from './mutations';

// Here define some states
const state = reactive({
    name: 'world',
});

// Here define some getters
const getters = {
    getName: state => state.name,
    getCapitalizedName: state => {
        const [firstLetter, ...restOfName] = state.name;
        return firstLetter.toUpperCase() + restOfName.join('').toLowerCase();
    },
};

// Here define some action function
const actions = {
    /**
     * Calls the SET_NAME mutation
     *
     * @param {object} context the context of the action
     * @param {object} payload the passed data
     */
    [_.SET_NAME]({ commit }, payload) {
        commit(_.SET_NAME, payload);
    },
};

// Here define some mutations
const mutations = {
    /**
     * Updates the state.name value
     *
     * @param {object} state the current state of the store
     * @param {object} payload the passed data
     */
    [_.SET_NAME](state, { name }) {
        state.name = name;
    },
};

const appModule = {
    state: readonly(state),
    actions,
    mutations,
    getters,
};

export default appModule;
