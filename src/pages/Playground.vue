<template>
  <main>
    <Header></Header>
    <section class="container playgroundContainer">
      <h1>Playground</h1>
      <Playground></Playground>
    </section>
  </main>
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Playground from '@/components/Playground.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Header, Playground },
});
</script>

<style>
.playgroundContainer {
  margin-bottom: 5rem;
}
</style>
