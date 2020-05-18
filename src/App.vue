<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@import '~@/styles/config.scss';
@import '~@/styles/resets.scss';
@import '~@/styles/foundations.scss';
@import '~@/styles/forms.scss';
</style>
