import appStore from './../../../src/store/modules/app';
import * as mut from './../../../src/store/modules/app/mutations';

const name = 'spectrum';

describe('App action', () => {
    test('Action should call SET_NAME mutation ', async () => {
        const context = {
            commit: jest.fn(),
        };

        const payload = { name };

        appStore.actions.setName(context, payload);
        expect(context.commit).toHaveBeenCalledWith(mut.SET_NAME, { name });
    });
});
