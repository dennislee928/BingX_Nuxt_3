<template>
  <div>
    <NavBar />
    <NuxtLayout />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>
