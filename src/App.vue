<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">Login</RouterLink> |
      <RouterLink to="/home">Home</RouterLink>
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  background-color: rgb(0, 139, 139);
  justify-content: center;
  align-items: center;
  text-align: center;
}
#nav {
  padding: 30px;
}
</style>
