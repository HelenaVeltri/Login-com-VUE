<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <h2>HOMEPAGE</h2>
  <button @click="goToLogin">Faça Login NOVAMENTE!</button>
</template>

<style>
button {
  padding: 10px;
  width: 25%;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 139, 139);
  border: none;
  cursor: pointer;
}
</style>
