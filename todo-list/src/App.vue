<template>
  <div id="nav">
    <router-link to="/"><p class="nav-element">TodoList</p></router-link>
    <router-link to="/api"><p class="nav-element">Api</p></router-link>
    <router-link to="/scriptSetup"
      ><p class="nav-element">Script Setup</p></router-link
    >
    <router-link to="/querygraphql"
      ><p class="nav-element">Query graphql</p></router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#nav {
  width: 100vw;
  display: flex;
}
.nav-element {
  margin-right: 10px;
}
</style>
