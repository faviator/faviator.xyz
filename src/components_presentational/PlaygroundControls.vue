<template>
  <main class="playground-controls">
    <section class="playground-controls__config-section">
      <label class="playground-controls__label">
        Size
        <InputRange
          name="size"
          :value="config.size"
          :min="5"
          :max="500"
          :step="1"
          @input="(v) => update('size', v)"
        ></InputRange>
      </label>
    </section>

    <hr />

    <section class="playground-controls__config-section">
      <label class="playground-controls__label">
        Text
        <input
          name="text"
          :value="config.text"
          type="text"
          placeholder="Text"
          @input="update('text', $event.target.value)"
        />
      </label>
      <label class="playground-controls__label">
        Font family (or choose from
        <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>)
        <InputGoogleFonts
          name="fontFamily"
          :value="config.fontFamily"
          type="text"
          @change="(font) => update('fontFamily', font)"
        ></InputGoogleFonts>
      </label>
      <label class="playground-controls__label">
        Font size
        <InputRange
          name="fontSize"
          :value="config.fontSize"
          :min="0"
          :max="120"
          :step="1"
          @input="(v) => update('fontSize', v)"
        ></InputRange>
      </label>
      <label class="playground-controls__label">
        Font color
        <input
          name="fontColor"
          :value="config.fontColor"
          type="text"
          placeholder="Font Color"
          @input="update('fontColor', $event.target.value)"
        />
      </label>
      <label class="playground-controls__label">
        dx
        <InputRange
          name="dx"
          :value="config.dx"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="(v) => update('dx', v)"
        ></InputRange>
      </label>
      <label class="playground-controls__label">
        dy
        <InputRange
          name="dy"
          :value="config.dy"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="(v) => update('dy', v)"
        ></InputRange>
      </label>
    </section>

    <hr />

    <section class="playground-controls__config-section">
      <label class="playground-controls__label">
        Background color
        <input
          name="backgroundColor"
          :value="config.backgroundColor"
          type="text"
          placeholder="Background Color"
          @input="update('backgroundColor', $event.target.value)"
        />
      </label>
      <label class="playground-controls__label">
        Border width
        <InputRange
          name="borderWidth"
          :value="config.borderWidth"
          :min="0"
          :max="config.size / 2"
          :step="0.5"
          @input="(v) => update('borderWidth', v)"
        ></InputRange>
      </label>
      <label class="playground-controls__label">
        Border color
        <input
          name="borderColor"
          :value="config.borderColor"
          type="text"
          placeholder="Border Color"
          @input="update('borderColor', $event.target.value)"
        />
      </label>
      <label class="playground-controls__label">
        Border radius
        <InputRange
          name="borderRadius"
          :value="config.borderRadius"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRadius"
        ></InputRange>
      </label>
      <label class="playground-controls__label">
        rx
        <InputRange name="rx" :value="config.rx" :min="0" :max="50" :step="0.5" @input="updateRx"></InputRange>
      </label>
      <label class="playground-controls__label">
        ry
        <InputRange name="ry" :value="config.ry" :min="0" :max="50" :step="0.5" @input="updateRy"></InputRange>
      </label>
    </section>
  </main>
</template>

<script lang="ts">
import InputRange from '@/components_presentational/InputRange.vue';
import InputGoogleFonts from '@/components/InputGoogleFonts.vue';
import { CreateSvgFaviconConfig } from '@faviator/create-svg-favicon';

export default {
  components: { InputRange, InputGoogleFonts },
  props: {
    config: {
      type: Object as () => CreateSvgFaviconConfig,
      required: true,
    },
  },
  emits: {
    change: (_config: object) => true,
  },
  methods: {
    update(name: string, value: string | number) {
      console.log(name, value);
      this.$emit('change', { ...this.config, [name]: value });
    },
    updateRadius(value: string) {
      this.$emit('change', {
        ...this.config,
        borderRadius: value,
        rx: undefined,
        ry: undefined,
      });
    },
    updateRx(value: string) {
      this.$emit('change', {
        ...this.config,
        borderRadius: undefined,
        rx: value,
      });
    },
    updateRy(value: string) {
      this.$emit('change', {
        ...this.config,
        borderRadius: undefined,
        ry: value,
      });
    },
  },
};
</script>

<style lang="scss">
@import '~@/styles/config';

.playground-controls {
  &__config-section {
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-weight: $font-family-primary-weight-bold;
    margin-bottom: ($core-margin * 3);
  }

  &__label > main,
  &__label > input {
    display: block;
    margin-top: ($core-margin / 2);
  }

  & > hr {
    margin-top: 0;
    margin-bottom: ($core-margin * 3);
  }
}
</style>
