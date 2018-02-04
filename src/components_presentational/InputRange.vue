<template>
  <main>
    <div>
      <input
        type="number"
        :name="name"
        :value="value"
        :disabled="disabled"
        @input="emitInput"
        @change="emitChange">
      <input
        type="range"
        :name="name"
        :min="min"
        :max="max"
        :step="step"
        :value="value"
        :disabled="disabled"
        @input="emitInput"
        @change="emitChange">
    </div>
  </main>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
    },
    min: {
      required: true,
      validator: (v) => !isNaN(Number(v)),
    },
    max: {
      required: true,
      validator: (v) => !isNaN(Number(v)),
    },
    step: {
      default: 1,
      validator: (v) => !isNaN(Number(v)),
    },
    value: {
      required: false,
      validator: (v) => !isNaN(Number(v)),
    },
    disabled: {
      default: false,
    },
  },
  methods: {
    emitChange(event) {
      event.target.value = Number(event.target.value);
      this.$emit('change', event);
    },
    emitInput(event) {
      event.target.value = Number(event.target.value);
      this.$emit('input', event);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-wrap: nowrap;
}

input[type=range] {
  flex-grow: 1;
}

input[type=number] {
  width: 5rem;
}
</style>
