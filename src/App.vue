<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "app",
  components: {
    "app-home": Home
  }
};
</script>

<style></style>
