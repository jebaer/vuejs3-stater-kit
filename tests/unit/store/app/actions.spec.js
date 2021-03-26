import appStore from 'Store/modules/app';
import * as _ from 'Store/modules/app/mutations';

const name = 'spectrum';

describe('App action', () => {
    test('Action should call SET_NAME mutation ', async () => {
        const context = {
            commit: jest.fn(),
        };

        const payload = { name };

        appStore.actions[_.SET_NAME](context, payload);
        expect(context.commit).toHaveBeenCalledWith(_.SET_NAME, { name });
    });
});
