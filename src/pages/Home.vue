<template>
  <main>
    <div class="github-button-container">
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

    <img class="logo" src="/assets/logo.png" />
    <h1 class="title">Faviator</h1>
    <p class="slogan">A simple easy favicon generator.</p>

    <div class="links">
      <router-link to="playground" class="link_playground" tag="button"
        >Test it out!</router-link
      >

      <a
        href="https://www.npmjs.com/package/faviator"
        class="button link_npm"
        target="_blank"
        >See NPM package</a
      >
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '/styles/config';

main {
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
}

.logo {
  width: 180px;
}

.title {
  font-size: 5rem;
  margin-bottom: $core-margin;
}

.slogan {
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 0;
}

.github-button-container {
  position: absolute;
  top: $core-margin;
  right: $core-margin;
}

.link_playground {
  margin-top: $core-margin;
  margin-bottom: $core-margin;
}
</style>
