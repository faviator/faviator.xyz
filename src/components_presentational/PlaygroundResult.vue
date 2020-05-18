<template>
  <div v-html="svg" class="playground-result"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import createSvgFavicon from '@faviator/create-svg-favicon';

export default defineComponent({
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  computed: {
    svg(): string {
      return createSvgFavicon(this.config);
    },
  },
});
</script>

<style lang="scss">
@import '~@/styles/config';

.playground-result {
  overflow: auto;
  display: flex;
  justify-content: center;
}
</style>
