<template>
  <main>
    <PlaygroundInstructions></PlaygroundInstructions>
    <section>
      <PlaygroundResult class="result" :config="config"></PlaygroundResult>
      <PlaygroundControls
        class="controls"
        :config="config"
        @change="updateConfig"
      ></PlaygroundControls>
    </section>
    <PlaygroundDisplayConfig :config="config"></PlaygroundDisplayConfig>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PlaygroundInstructions from '/components_presentational/PlaygroundInstructions.vue';
import PlaygroundControls from '/components_presentational/PlaygroundControls.vue';
import PlaygroundDisplayConfig from '/components_presentational/PlaygroundDisplayConfig.vue';
import PlaygroundResult from '/components_presentational/PlaygroundResult.vue';

export default {
  components: {
    PlaygroundInstructions,
    PlaygroundControls,
    PlaygroundDisplayConfig,
    PlaygroundResult,
  },
  computed: mapState(['config']),
  methods: mapActions(['updateConfig']),
};
</script>

<style lang="scss" scoped>
@import '/styles/config';
@import '/styles/mixins';

section {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.controls {
  width: 400px;
  max-width: 100%;
}

.result {
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
</style>
