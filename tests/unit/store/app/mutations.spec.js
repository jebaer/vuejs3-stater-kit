import appStore from 'Store/modules/app';
import * as mut from 'Store/modules/app/mutations';

describe('SET_NAME mutation in store APP', () => {
    test('should mutate name state', () => {
        const state = { name: '' };
        const name = 'spectrum';
        appStore.mutations[mut.SET_NAME](state, { name });
        expect(state.name).toEqual(name);
    });
});
