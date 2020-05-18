<template>
  <main>
    <PlaygroundInstructions></PlaygroundInstructions>
    <section class="playground__preview">
      <PlaygroundResult class="playground__result" :config="config"></PlaygroundResult>
      <PlaygroundControls class="playground__controls" :config="config" @change="updateConfig"></PlaygroundControls>
    </section>
    <PlaygroundDisplayConfig :config="config"></PlaygroundDisplayConfig>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import PlaygroundInstructions from '@/components_presentational/PlaygroundInstructions.vue';
import PlaygroundControls from '@/components_presentational/PlaygroundControls.vue';
import PlaygroundDisplayConfig from '@/components_presentational/PlaygroundDisplayConfig.vue';
import PlaygroundResult from '@/components_presentational/PlaygroundResult.vue';

import faviatorIconConfig from '@/../faviatorIconConfig.json';

export default defineComponent({
  components: {
    PlaygroundInstructions,
    PlaygroundControls,
    PlaygroundDisplayConfig,
    PlaygroundResult,
  },

  setup() {
    const config = ref<object>(faviatorIconConfig);
    const updateConfig = (c: object) => (config.value = c);
    return { config, updateConfig };
  },
});
</script>

<style lang="scss">
@import '~@/styles/config';
@import '~@/styles/mixins';

.playground {
  &__preview {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  &__controls {
    width: 400px;
    max-width: 100%;
  }

  &__result {
    flex-grow: 1;
    flex-shrink: 0;
    position: sticky;
    top: 0;
    background: $color-background;
    padding-top: $core-padding;
    padding-bottom: $core-padding;
    margin-bottom: $core-margin;
    @include for-size(phone-only) {
      box-shadow: $core-box-shadow;
    }
  }
}
</style>
