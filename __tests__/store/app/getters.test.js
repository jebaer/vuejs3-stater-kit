import appStore from './../../../src/store/modules/app';

describe('App getters', () => {
    test('getCapitalizedName should return capitalized name', () => {
        const name = 'spectrum';
        const state = { name };
        expect(appStore.getters.getCapitalizedName(state)).toEqual('Spectrum');
    });
});
