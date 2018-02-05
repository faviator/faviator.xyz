<template>
  <header>
    <main class="container">
      <router-link to="/" class="title">Faviator</router-link>
    </main>
  </header>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import '../styles/config';

header {
  background: $color-primary;
  color: $color-primary-foreground;
  padding-top: $core-margin / 2;
  padding-bottom: $core-margin / 2;
  margin-bottom: $core-margin;
  box-shadow: $core-box-shadow;
}

main {
  display: flex;
}

.title {
  font-family: $font-family-secondary;
  font-size: 2rem;
  color: $color-primary-foreground;
}
</style>
