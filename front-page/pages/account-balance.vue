<template>
  <NavBar />
  <div>
    <AccountBalance />
  </div>
</template>

<script>
import AccountBalance from "~/components/AccountBalance.vue";

export default {
  components: {
    AccountBalance,
  },
};
</script>
