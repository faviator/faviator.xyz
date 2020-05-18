<template>
  <main class="input-google-fonts">
    <button class="input-google-fonts__button" @click="selectRandom">Random</button>

    <select size="10" @change="$emit('change', $event.target.value)">
      <option v-if="fonts.length <= 0" :value="value" selected>{{ value }}</option>
      <option v-for="(font, i) in fonts" :key="i" :value="font" :selected="font === value">{{ font }}</option>
    </select>
  </main>
</template>

<script lang="ts">
import { pickRandom } from '@/utils';
import fonts from '@/assets/googleFonts.json';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: 'Dancing Script',
    },
  },

  emits: {
    change: (_font: string) => true,
  },

  methods: {
    selectRandom() {
      this.$emit('change', pickRandom(this.fonts));
    },
  },

  data: () => ({
    fonts,
  }),
});
</script>

<style lang="scss">
@import '~@/styles/config';

.input-google-fonts__button {
  margin-bottom: $core-margin;
}
</style>
