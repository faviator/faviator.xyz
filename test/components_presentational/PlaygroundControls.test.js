import { mount } from '@vue/test-utils';
import PlaygroundControls from '@/components_presentational/PlaygroundControls.vue';
import InputRange from '@/components_presentational/InputRange.vue';

describe('components_presentational/PlaygroundControls', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PlaygroundControls, {
      propsData: {
        config: {
          size: 100,
        },
      },
      stubs: {
        'f-p-input-range': InputRange,
      },
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  ['size', 'text', 'dx', 'dy', 'fontSize', 'fontFamily', 'fontColor', 'backgroundColor',
    'borderWidth', 'borderColor'].forEach(k => {
    describe(`<input name="${k}">`, () => {
      it(`should emit change event @input with correct payload`, () => {
        const input = wrapper.find(`input[name=${k}]`);
        expect(input.exists()).toBe(true);
        input.element.value = '1';
        input.trigger('input');
        expect(wrapper.emitted().change).toBeTruthy();
        expect(wrapper.emitted().change.length).toBe(1);
        expect(wrapper.emitted().change[0]).toEqual([{
          [k]: '1',
        }]);
      });
    });
  });

  describe(`<input name="borderRadius">`, () => {
    it(`should emit change event @input with correct payload`, () => {
      const input = wrapper.find(`input[name=borderRadius]`);
      expect(input.exists()).toBe(true);
      input.element.value = '1';
      input.trigger('input');
      expect(wrapper.emitted().change).toBeTruthy();
      expect(wrapper.emitted().change.length).toBe(1);
      expect(wrapper.emitted().change[0]).toEqual([{
        borderRadius: '1',
        rx: undefined,
        ry: undefined,
      }]);
    });
  });

  describe(`<input name="rx">`, () => {
    it(`should emit change event @input with correct payload`, () => {
      const input = wrapper.find(`input[name=rx]`);
      expect(input.exists()).toBe(true);
      input.element.value = '1';
      input.trigger('input');
      expect(wrapper.emitted().change).toBeTruthy();
      expect(wrapper.emitted().change.length).toBe(1);
      expect(wrapper.emitted().change[0]).toEqual([{
        borderRadius: undefined,
        rx: '1',
      }]);
    });
  });

  describe(`<input name="ry">`, () => {
    it(`should emit change event @input with correct payload`, () => {
      const input = wrapper.find(`input[name=ry]`);
      expect(input.exists()).toBe(true);
      input.element.value = '1';
      input.trigger('input');
      expect(wrapper.emitted().change).toBeTruthy();
      expect(wrapper.emitted().change.length).toBe(1);
      expect(wrapper.emitted().change[0]).toEqual([{
        borderRadius: undefined,
        ry: '1',
      }]);
    });
  });

});
