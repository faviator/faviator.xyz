<template>
  <main>

    <button @click="selectRandom">Random</button>

    <select size="10" @change="$emit('change', $event.target.value)">
      <option v-if="fonts.length <= 0" :value="value" selected>{{value}}</option>
      <option v-for="(font, i) in fonts" :key="i" :value="font" :selected="font === value">{{font}}</option>
    </select>
  </main>
</template>

<script>
import { pickRandom } from '../utils';

export default {
  async created() {
    this.fonts = await fetch('/googleFonts.json').then(res => res.json());
  },

  props: {
    value: {
      type: String,
      default: 'Dancing Script',
    },
  },

  methods: {
    selectRandom() {
      this.$emit('change', pickRandom(this.fonts));
    },
  },

  data: () => ({
    fonts: [],
  }),
};
</script>

<style lang="scss" scoped>
@import '../styles/config';

button {
  margin-bottom: $core-margin;
}
</style>
