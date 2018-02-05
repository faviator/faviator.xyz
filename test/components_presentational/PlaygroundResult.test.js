import { shallow } from '@vue/test-utils';
import PlaygroundResult from '@/components_presentational/PlaygroundResult.vue';
import createSvgFavicon from '@faviator/create-svg-favicon';

jest.mock('@faviator/create-svg-favicon');

describe('components_presentational/PlaygroundResult', () => {
  let wrapper;

  beforeEach(() => createSvgFavicon.mockClear());

  beforeEach(() => {
    wrapper = shallow(PlaygroundResult, {
      propsData: {
        config: { size: 160 },
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('uses image tag to display svg', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  });

  test('createSvgFavicon is called', () => {
    expect(createSvgFavicon).toHaveBeenCalledTimes(1);
  });

});
