import { shallow } from '@vue/test-utils';
import PlaygroundInstructions from '@/components_presentational/PlaygroundInstructions.vue';

describe('components_presentational/PlaygroundInstructions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(PlaygroundInstructions);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

});
