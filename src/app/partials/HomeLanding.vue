<template>
  <main>
    <img src="/assets/logo.png">
    <h1 class="title">Faviator</h1>
    <div class="slogan">A simple easy favicon generator.</div>
    <router-link to="playground" tag="button">Test it out!</router-link>
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
}

.slogan {
  font-size: 1.5rem;
  font-style: italic;
}

</style>
