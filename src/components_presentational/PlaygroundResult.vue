<template>
  <main>
    <div v-html="svg"></div>
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
  computed: {
    svg() {
      return createSvgFavicon(this.config);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '/styles/config';

div {
  overflow: auto;
  display: flex;
  justify-content: center;
}
</style>
