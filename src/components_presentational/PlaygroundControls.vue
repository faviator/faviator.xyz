<template>
  <main>
    <section class="config_size">
      <label>
        Size
        <InputRange
          name="size"
          :value="config.size"
          :min="5"
          :max="500"
          :step="1"
          @input="v => update('size', v)"
        ></InputRange>
      </label>
    </section>

    <hr />

    <section class="config_text">
      <label>
        Text
        <input
          name="text"
          :value="config.text"
          type="text"
          placeholder="Text"
          @input="update('text', $event.target.value)"
        />
      </label>
      <label>
        Font family (or choose from
        <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>)
        <InputGoogleFonts
          name="fontFamily"
          :value="config.fontFamily"
          type="text"
          @change="font => update('fontFamily', font)"
        ></InputGoogleFonts>
      </label>
      <label>
        Font size
        <InputRange
          name="fontSize"
          :value="config.fontSize"
          :min="0"
          :max="120"
          :step="1"
          @input="v => update('fontSize', v)"
        ></InputRange>
      </label>
      <label>
        Font color
        <input
          name="fontColor"
          :value="config.fontColor"
          type="text"
          placeholder="Font Color"
          @input="update('fontColor', $event.target.value)"
        />
      </label>
      <label>
        dx
        <InputRange
          name="dx"
          :value="config.dx"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('dx', v)"
        ></InputRange>
      </label>
      <label>
        dy
        <InputRange
          name="dy"
          :value="config.dy"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('dy', v)"
        ></InputRange>
      </label>
    </section>

    <hr />

    <section class="config_other">
      <label>
        Background color
        <input
          name="backgroundColor"
          :value="config.backgroundColor"
          type="text"
          placeholder="Background Color"
          @input="update('backgroundColor', $event.target.value)"
        />
      </label>
      <label>
        Border width
        <InputRange
          name="borderWidth"
          :value="config.borderWidth"
          :min="0"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('borderWidth', v)"
        ></InputRange>
      </label>
      <label>
        Border color
        <input
          name="borderColor"
          :value="config.borderColor"
          type="text"
          placeholder="Border Color"
          @input="update('borderColor', $event.target.value)"
        />
      </label>
      <label>
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
      <label>
        rx
        <InputRange
          name="rx"
          :value="config.rx"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRx"
        ></InputRange>
      </label>
      <label>
        ry
        <InputRange
          name="ry"
          :value="config.ry"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRy"
        ></InputRange>
      </label>
    </section>
  </main>
</template>

<script>
import InputRange from '/components_presentational/InputRange.vue';
import InputGoogleFonts from '/components/InputGoogleFonts.vue';

export default {
  components: { InputRange, InputGoogleFonts },
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update(name, value) {
      this.$emit('change', { [name]: value });
    },
    updateRadius(value) {
      this.$emit('change', {
        borderRadius: value,
        rx: undefined,
        ry: undefined,
      });
    },
    updateRx(value) {
      this.$emit('change', {
        borderRadius: undefined,
        rx: value,
      });
    },
    updateRy(value) {
      this.$emit('change', {
        borderRadius: undefined,
        ry: value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '/styles/config';

section {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: $font-family-primary-weight-bold;
  margin-bottom: ($core-margin * 3);
}

label > main,
label > input {
  display: block;
  margin-top: ($core-margin / 2);
}

hr {
  margin-top: 0;
  margin-bottom: ($core-margin * 3);
}
</style>
