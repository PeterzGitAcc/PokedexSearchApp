<template>
  <header>
    <NavbarComponent />
    <router-view />
  </header>
  <body></body>
  <footer></footer>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
};
</script>

<style>
header {
  position: relative;
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  height: 10vh;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
