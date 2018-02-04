<template>
  <code>{{prettyConfig}}</code>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  computed: {
    prettyConfig() {
      return JSON.stringify(this.config, null, 2).trim();
    },
  },
};
</script>

<style></style>
