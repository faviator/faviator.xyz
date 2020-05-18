<template>
  <div class="input-range">
    <input
      type="number"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :value="value"
      @input="emitInput"
      @change="emitChange"
    />
    <input
      type="range"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      :disabled="disabled"
      @input="emitInput"
      @change="emitChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
    min: Number,
    max: Number,
    step: {
      type: Number,
      default: 1,
    },
    value: Number,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    change: (_x: number) => true,
    input: (_x: number) => true,
  },
  methods: {
    emitChange(event: Event) {
      if (!(event?.target instanceof HTMLInputElement)) {
        return;
      }
      this.$emit('change', Number(event.target.value) || 0);
    },
    emitInput(event: Event) {
      if (!(event?.target instanceof HTMLInputElement)) {
        return;
      }
      this.$emit('input', Number(event.target.value) || 0);
    },
  },
});
</script>

<style lang="scss">
.input-range {
  display: flex;
  flex-wrap: nowrap;

  input[type='range'] {
    flex-grow: 1;
  }

  input[type='number'] {
    width: 5rem;
  }
}
</style>
