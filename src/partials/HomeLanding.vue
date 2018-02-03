<template>
  <main>
    <img src="/assets/logo.png">
    <h1 class="title">Faviator</h1>
    <p class="slogan">A simple easy favicon generator.</p>
    <router-link to="playground" tag="button">Test it out!</router-link>
    <a href="https://www.npmjs.com/package/faviator" class="button">See NPM package</a>
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
}

.title {
  font-size: 5rem;
  margin-bottom: $core-margin / 2;
}

.slogan {
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 0;
}

button {
  margin-top: $core-margin;
}

</style>
