<template>
  <main class="home">
    <div class="home__github-button-container">
      <a
        class="github-button"
        href="https://github.com/faviator/faviator"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star faviator/faviator on GitHub"
        >Star</a
      >
    </div>

    <img class="home__logo" src="/assets/logo.png" />
    <h1 class="home__title">Faviator</h1>
    <p class="home__slogan">A simple easy favicon generator.</p>

    <div class="home__links">
      <router-link to="playground" class="button home__link_playground">Test it out!</router-link>

      <a href="https://www.npmjs.com/package/faviator" class="button home__link_npm" target="_blank">See NPM package</a>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import '~@/styles/config';

.home {
  color: $color-primary-foreground;
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5 * $core-padding;
  padding-bottom: 3 * $core-padding;
  padding-left: $core-padding;
  padding-right: $core-padding;
  text-align: center;

  &__logo {
    width: 180px;
  }

  &__title {
    font-size: 5rem;
    margin-bottom: $core-margin;
  }

  &__slogan {
    font-size: 1.5rem;
    font-style: italic;
    margin-top: 0;
  }

  &__github-button-container {
    position: absolute;
    top: $core-margin;
    right: $core-margin;
  }

  &__link_playground {
    margin-top: $core-margin;
    margin-bottom: $core-margin;
  }
}
</style>
