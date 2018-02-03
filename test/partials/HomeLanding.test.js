import { shallow } from '@vue/test-utils';
import HomeLanding from '@/partials/HomeLanding.vue';

describe('partials/HomeLanding', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(HomeLanding);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('shows faviator title', () => {
    expect(wrapper.text()).toEqual(expect.stringMatching(/faviator/i));
  });

  test('shows the logo', () => {
    const imgs = wrapper.findAll('img').wrappers;
    expect(imgs.some(w => w.attributes().src.match(/logo/i))).toBe(true);
  });

  describe('.link_npm', () => {
    let link_npm_wrapper;
    beforeEach(() => {
      link_npm_wrapper = wrapper.find('.link_npm');
    });

    test('should be an <a>', () => {
      expect(link_npm_wrapper.is('a')).toBe(true);
    });

    test('should have href to npm url', () => {
      expect(link_npm_wrapper.attributes().href).toEqual('https://www.npmjs.com/package/faviator');
    });

    test('should target _blank', () => {
      expect(link_npm_wrapper.attributes().target).toEqual('_blank');
    });
  });

  describe('.link_playground', () => {
    let link_playground_wrapper;
    beforeEach(() => {
      link_playground_wrapper = wrapper.find('.link_playground');
    });

    test('should be a <router-link>', () => {
      expect(link_playground_wrapper.is('router-link')).toBe(true);
    });

    test('should have [to] set to playground', () => {
      expect(link_playground_wrapper.attributes().to).toEqual('playground');
    });
  });
});
