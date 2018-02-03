<template>
  <main>
    <section class="config_size">
      <input
        name="size"
        :value="config.size"
        type="range"
        min="5"
        max="160"
        step="1"
        @input="update">
    </section>

    <hr>

    <section class="config_text">
      <input
        name="fontFamily"
        :value="config.fontFamily"
        type="text"
        placeholder="Font Family"
        @input="update">
      <input
        name="fontSize"
        :value="config.fontSize"
        type="text"
        placeholder="Font Size"
        @input="update">
      <input
        name="fontColor"
        :value="config.fontColor"
        type="text"
        placeholder="Font Color"
        @input="update">
      <input
        name="dx"
        :value="config.dx"
        type="range"
        :min="-(config.size / 2)"
        :max="config.size / 2"
        step="0.5"
        @input="update">
      <input
        name="dy"
        :value="config.dy"
        type="range"
        :min="-(config.size / 2)"
        :max="config.size / 2"
        step="0.5"
        @input="update">
    </section>

    <hr>

    <section class="config_other">
      <input
        name="backgroundColor"
        :value="config.backgroundColor"
        type="text"
        placeholder="Background Color"
        @input="update">
      <input
        name="borderWidth"
        :value="config.borderWidth"
        type="range"
        :min="0"
        :max="config.size / 2"
        step="0.5"
        @input="update">
      <input
        name="borderColor"
        :value="config.borderColor"
        type="text"
        placeholder="Border Color"
        @input="update">
      <input
        name="borderRadius"
        :value="config.borderRadius"
        type="range"
        :min="0"
        :max="config.size / 2"
        step="0.5"
        @input="update">
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
    update({ target: { name, value }}) {
      this.$emit('change', {
        ...this.config,
        [name]: value,
      });
    },
  },
};
</script>

<style style="scss" scoped>
main {
  width: 500px;
  max-width: 100%;
}

section {
  display: flex;
  flex-direction: column;
}

input {

}
</style>
