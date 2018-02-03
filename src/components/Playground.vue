<template>
  <main>
    <f-p-playground-instructions></f-p-playground-instructions>
    <section>
      <f-p-playground-controls :config="config" @change="updateConfig"></f-p-playground-controls>
      <f-p-playground-result :config="config"></f-p-playground-result>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState(['config']),
  methods: mapActions(['updateConfig']),
};
</script>

<style style="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
}
</style>
