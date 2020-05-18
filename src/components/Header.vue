<template>
  <header class="header">
    <main class="header__main container">
      <router-link to="/" class="header__title">Faviator</router-link>
    </main>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
@import '~@/styles/config';

.header {
  background: $color-primary;
  color: $color-primary-foreground;
  padding-top: $core-margin / 2;
  padding-bottom: $core-margin / 2;
  margin-bottom: $core-margin;
  box-shadow: $core-box-shadow;

  &__main {
    display: flex;
  }

  &__title {
    font-family: $font-family-secondary;
    font-size: 2rem;
    color: $color-primary-foreground;
  }
}
</style>
