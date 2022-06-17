<template>
    <div class="my-2">
      <h2 class="text-h4 font-weight-bold">Food Planner</h2>
      <planner></planner>
    </div>
</template>
<script>

require("@/views/Planner/main.js");

export default {
  name: "Planner",
  components: {
    planner: () => import("../resources/Planner/app"),
  },
};
</script>