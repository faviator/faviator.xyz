import { shallow } from '@vue/test-utils';
import PlaygroundDisplayConfig from '@/components_presentational/PlaygroundDisplayConfig.vue';

describe('components_presentational/PlaygroundDisplayConfig', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(PlaygroundDisplayConfig, {
      propsData: {
        config: {
          a: 3,
          b: 'elkj',
        },
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

});
