<template>
  <div id="nav">
    <router-link to="/">TodoList</router-link>
    <router-link to="/api">Api</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
