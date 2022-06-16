<template>
    <div class="my-2">
      <h2 class="text-h4 font-weight-bold">Food Planner</h2>
      <planner></planner>
    </div>
</template>
<script>
export default {
  name: "Planner",
  components: {
    planner: () => import("./Planner/app")
  },
};
</script>