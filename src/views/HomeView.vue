<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Indecision />
  </div>
</template>

<script>
// @ is an alias to /src
import Indecision from "@/components/Indecision.vue";

export default {
  name: "HomeView",
  components: {
    // Counter,
    Indecision,
  },
};
</script>

