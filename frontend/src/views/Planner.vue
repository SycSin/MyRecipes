<template>
  <v-container>
    <h2 class="text-h4 font-weight-bold">Food Planner</h2>
    <planner></planner>
  </v-container>
</template>
<script>

require("../resources/Planner/main.js");

export default {
  name: "Planner",
  components: {
    planner: () => import("../resources/Planner/app"),
  },
};
</script>