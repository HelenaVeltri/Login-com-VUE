<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from "./components/LOgin.vue";

export default {
  name: "LoginPagina",
  components: {
    Login,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: rgb(0, 139, 139);
}
</style>
