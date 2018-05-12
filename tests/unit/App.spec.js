import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(App);
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('contains the <router-view> component', () => {
    expect(wrapper.contains('router-view')).toBe(true);
  });

  test('has name App', () => {
    expect(wrapper.name()).toEqual('App');
  });
});
