<template>
  <main>
    <img class="logo" src="/assets/logo.png">
    <h1 class="title">Faviator</h1>
    <p class="slogan">A simple easy favicon generator.</p>

    <div class="links">
      <router-link to="playground"
        class="link_playground"
        tag="button">Test it out!</router-link>

      <a href="https://www.npmjs.com/package/faviator"
        class="button link_npm"
        target="_blank">See NPM package</a>
    </div>
  </main>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
@import '../styles/config';

main {
  color: white;
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
  width: 130px;
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

.link_playground {
  margin-top: $core-margin;
  margin-bottom: $core-margin;
}



</style>
