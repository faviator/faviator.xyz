<template>
  <main>
    <select size="10" @change="$emit('change', $event)">
      <option v-if="fonts.length <= 0" :value="value" selected>{{value}}</option>
      <option v-for="(font, i) in fonts" :key="i" :value="font" :selected="font === value">{{font}}</option>
    </select>
  </main>
</template>

<script>
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

  data: () => ({
    fonts: [],
  }),
};
</script>

<style lang="scss" scoped>
</style>
