<template>
  <main>
    <Header></Header>
    <section class="container">
      <h1>Playground</h1>
      <Playground></Playground>
    </section>
  </main>
</template>

<script>
import Header from '/components/Header.vue';
import Playground from '/components/Playground.vue';

export default {
  components: { Header, Playground },
};
</script>

<style></style>
