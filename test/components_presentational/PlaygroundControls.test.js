import { shallow } from '@vue/test-utils';
import PlaygroundControls from '@/components_presentational/PlaygroundControls.vue';

describe('components_presentational/PlaygroundControls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(PlaygroundControls,{
      propsData: {
        config: {
          size: 100,
        },
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  ['size', 'text', 'dx', 'dy', 'fontSize', 'fontFamily', 'fontColor', 'backgroundColor',
    'borderWidth', 'borderColor', 'borderRadius', 'rx', 'ry'].forEach(k => {
    describe(`<input name="${k}">`, () => {
      it(`should emit change event @input with correct payload`, () => {
        const input = wrapper.find(`input[name=${k}]`);
        expect(input.exists()).toBe(true);
        input.element.value = '-1';
        input.trigger('input');
        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change.length).toBe(1);
        expect(wrapper.emitted().change[0]).toEqual([{
          [k]: '-1',
        }]);
      });
    });
  });

});
