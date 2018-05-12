<template>
  <main>
    hello {{ user.name }}
  </main>
</template>

<script>
export default {
  /*
  data() {
    return {
      user: {},
    };
  },
  created() {
    fetch('http://localhost:8081/users/me', {
      credentials: 'include',
    }).then(res => res.json()).then(user => {
      console.log(user);
      this.user = user
    });
  }
  */
};
</script>

<style lang="scss" scoped>
@import '../styles/config';
</style>
