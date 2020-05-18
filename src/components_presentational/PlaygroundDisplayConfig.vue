<template>
  <div>
    <h3>Download</h3>
    <div class="playground__downloads">
      <button @click="downloadPng">Download PNG</button>
      <button @click="downloadJpg">Download JPG</button>
      <button @click="downloadSvg">Download SVG</button>
    </div>

    <h3>Config object</h3>
    <code>{{ prettyConfig }}</code>

    <h3>Command line</h3>
    <code>{{ cliOptions }}</code>

    <h4>To save as png, add</h4>
    <code>--output favicon.png</code>

    <h4>To save as jpg, add</h4>
    <code>--output favicon.jpg</code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { paramCase } from 'param-case';
import createSvgFavicon from '@faviator/create-svg-favicon';

const downloadFile = (name: string, link: string): void => {
  const a = document.createElement('a');
  a.download = name;
  a.href = link;
  a.click();
};

export default defineComponent({
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async downloadPng() {
      const { default: SvgToImg } = await import(
        // @ts-ignore
        /* webpackChunkName: "svgToImg" */ '@ycm.jason/svg-to-img/dist/svg-to-img.esm.js'
      );
      const dataUrl = await SvgToImg.png(this.getSvgString());
      downloadFile('favicon.png', dataUrl);
    },
    async downloadJpg() {
      const { default: SvgToImg } = await import(
        // @ts-ignore
        /* webpackChunkName: "svgToImg" */ '@ycm.jason/svg-to-img/dist/svg-to-img.esm.js'
      );
      const dataUrl = await SvgToImg.jpg(this.getSvgString());
      downloadFile('favicon.jpg', dataUrl);
    },
    downloadSvg() {
      downloadFile('favicon.svg', `data:image/svg+xml;base64,${btoa(this.getSvgString())}`);
    },
    getSvgString() {
      return createSvgFavicon(this.config);
    },
  },
  computed: {
    prettyConfig(): string {
      return JSON.stringify(this.config, null, 2).trim();
    },
    cliOptions(): string {
      return (
        'faviator ' +
        Object.entries(this.config)
          .filter(([, v]) => !!v)
          .map(([k, v]) => `--${paramCase(k)} '${v}'`)
          .join(' ')
      );
    },
  },
});
</script>

<style>
.playground__downloads {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
}
</style>
