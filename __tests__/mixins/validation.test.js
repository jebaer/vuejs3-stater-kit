import validation from '../../src/mixins/validation';
import { shallowMount } from '@vue/test-utils';

describe('Name validation mixin', () => {
    const wrapper = shallowMount({
        render() {},
        mixins: [validation],
        data() {
            return {
                name: null,
            };
        },
    });
    test('should be invalid when name is to short', () => {
        wrapper.vm.$data.name = 'x';
        expect(wrapper.vm.nameValidation()).toBeFalsy();
    });

    test('should be invalid when name contains numeric caracters', () => {
        wrapper.vm.$data.name = 'r2d2';
        expect(wrapper.vm.nameValidation()).toBeFalsy();
    });

    test('should be valid when name contains only alpha caracters in uppercase', () => {
        wrapper.vm.$data.name = 'SPECTRUM';
        expect(wrapper.vm.nameValidation()).toBeTruthy();
    });

    test('should be valid when name contains only alpha caracters in lowercase', () => {
        wrapper.vm.$data.name = 'spectrum';
        expect(wrapper.vm.nameValidation()).toBeTruthy();
    });
});
