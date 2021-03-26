import Home from 'Views/Home.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Home);
});

afterEach(() => {
    wrapper.destroy();
});

describe('Home.vue', () => {
    test('should render correct contents', () => {
        expect(wrapper.html()).toContain('VUEJS 3 STARTER KIT');
        expect(wrapper.html()).toContain(
            'A PRECONFIGURED PACKAGE TO START IN A RIGHT WAY',
        );
    });
});
