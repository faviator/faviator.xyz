import { shallow } from '@vue/test-utils';

import InputRange from '@/components_presentational/InputRange.vue';

describe('components_presentational/InputRange', () => {
  let wrapper;
  const TEST_VALUE = '50';

  beforeEach(() => {
    wrapper = shallow(InputRange, {
      propsData: {
        value: 0,
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('will emit input event on input[type=number]@input', () => {
    const input = wrapper.find('input[type=number]');
    input.element.value = TEST_VALUE;
    input.trigger('input');
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input.length).toBe(1);

    expect(wrapper.emitted().input[0]).toEqual([TEST_VALUE]);
  });

  test('will emit change event on input[type=number]@change', () => {
    const input = wrapper.find('input[type=number]');
    input.element.value = TEST_VALUE;
    input.trigger('change');
    expect(wrapper.emitted().change).toBeTruthy();
    expect(wrapper.emitted().change.length).toBe(1);

    expect(wrapper.emitted().change[0]).toEqual([TEST_VALUE]);
  });

});
