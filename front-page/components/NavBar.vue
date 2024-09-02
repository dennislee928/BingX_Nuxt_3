<template>
  <nav>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/account-balance">Account Balance</nuxt-link></li>
      <li><nuxt-link to="/position-data">Position Data</nuxt-link></li>
      <li><nuxt-link to="/income-data">Income Data</nuxt-link></li>
      <li>
        <nuxt-link to="/export-income-data">Export Income Data</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  padding: 1rem;
}
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
li {
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
