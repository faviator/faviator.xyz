<template>
  <main>
    <div v-html="createSvgFavicon(config)"></div>
  </main>
</template>

<script>
import createSvgFavicon from '@faviator/create-svg-favicon';

export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  methods: {
    createSvgFavicon,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/config';
div {
  overflow: auto;
  display: flex;
  justify-content: center;
}
</style>
