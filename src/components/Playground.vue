<template>
  <main>
    <f-p-playground-instructions></f-p-playground-instructions>
    <section>
      <f-p-playground-result class="result" :config="config"></f-p-playground-result>
      <f-p-playground-controls class="controls"
        :config="config"
        @change="updateConfig"></f-p-playground-controls>
    </section>
    <f-p-playground-display-config :config="config"></f-p-playground-display-config>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['config']),
  methods: mapActions(['updateConfig']),
};
</script>

<style lang="scss" scoped>
@import '../styles/config';
@import '../styles/mixins';

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
