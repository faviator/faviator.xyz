<template>
  <main>
    {{config}}
  </main>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
