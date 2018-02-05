<template>
  <div>
    <h3>Config object</h3>
    <code>{{prettyConfig}}</code>

    <h3>Command line</h3>
    <code>{{cliOptions}}</code>

    <h4>To save as png, add</h4>
    <code>--output favicon.png</code>

    <h4>To save as jpg, add</h4>
    <code>--output favicon.jpg</code>
  </div>
</template>

<script>
import paramCase from 'param-case';
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
    cliOptions() {
      return 'faviator ' + Object.entries(this.config)
        .filter(([, v]) => !!v)
        .map(([k, v]) => `--${paramCase(k)} '${v}'`)
        .join(' ');
    },
  },
};
</script>

<style>
</style>
