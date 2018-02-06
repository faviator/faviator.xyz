<template>
  <main>
    <section class="config_size">
      <label>
        Size
        <f-p-input-range
          name="size"
          :value="config.size"
          :min="5"
          :max="500"
          :step="1"
          @input="v => update('size', v)"></f-p-input-range>
      </label>
    </section>

    <hr>

    <section class="config_text">
      <label>
        Text
        <input
          name="text"
          :value="config.text"
          type="text"
          placeholder="Text"
          @input="update('text', $event.target.value)">
      </label>
      <label>
        Font family (choose from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>)
        <input
          name="fontFamily"
          :value="config.fontFamily"
          type="text"
          placeholder="Font Family"
          @input="update('fontFamily', $event.target.value)">
      </label>
      <label>
        Font size
        <f-p-input-range
          name="fontSize"
          :value="config.fontSize"
          :min="0"
          :max="120"
          :step="1"
          @input="v => update('fontSize', v)"></f-p-input-range>
      </label>
      <label>
        Font color
        <input
          name="fontColor"
          :value="config.fontColor"
          type="text"
          placeholder="Font Color"
          @input="update('fontColor', $event.target.value)">
      </label>
      <label>
        dx
        <f-p-input-range
          name="dx"
          :value="config.dx"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('dx', v)"></f-p-input-range>
      </label>
      <label>
        dy
        <f-p-input-range
          name="dy"
          :value="config.dy"
          :min="-(config.size / 2)"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('dy', v)"></f-p-input-range>
      </label>
    </section>

    <hr>

    <section class="config_other">
      <label>
        Background color
        <input
          name="backgroundColor"
          :value="config.backgroundColor"
          type="text"
          placeholder="Background Color"
          @input="update('backgroundColor', $event.target.value)">
      </label>
      <label>
        Border width
        <f-p-input-range
          name="borderWidth"
          :value="config.borderWidth"
          :min="0"
          :max="config.size / 2"
          :step="0.5"
          @input="v => update('borderWidth', v)"></f-p-input-range>
      </label>
      <label>
        Border color
        <input
          name="borderColor"
          :value="config.borderColor"
          type="text"
          placeholder="Border Color"
          @input="update('borderColor', $event.target.value)">
      </label>
      <label>
        Border radius
        <f-p-input-range
          name="borderRadius"
          :value="config.borderRadius"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRadius"></f-p-input-range>
      </label>
      <label>
        rx
        <f-p-input-range
          name="rx"
          :value="config.rx"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRx"></f-p-input-range>
      </label>
      <label>
        ry
        <f-p-input-range
          name="ry"
          :value="config.ry"
          :min="0"
          :max="50"
          :step="0.5"
          @input="updateRy"></f-p-input-range>
      </label>
    </section>
  </main>
</template>

<script>
export default {
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
@import '../styles/config';

section {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: $font-family-primary-weight-bold;
  margin-bottom: ($core-margin * 3);
}

label > main, label > input {
  display: block;
  margin-top: ($core-margin / 2);
}

hr {
  margin-top: 0;
  margin-bottom: ($core-margin * 3);
}
</style>
