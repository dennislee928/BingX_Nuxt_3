<template>
  <header class="header">
    <p href="https://bingx.com/zh-tw/" class="logo">BingX API</p>
    <i class="bx bx-menu" id="menu-icon"></i>
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/account-balance">Account Balance</NuxtLink></li>
      <li><NuxtLink to="/position-data">Position Data</NuxtLink></li>
      <li><NuxtLink to="/income-data">Income Data</NuxtLink></li>
      <li><NuxtLink to="/export-income-data">Export Income Data</NuxtLink></li>
    </ul>
  </header>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const isHomePage = route.path === "/";
    return { isHomePage };
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 50px; /* 調整 padding */
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between; /* 使內容在 header 內均勻分佈 */
  align-items: center;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: 0.5s;
}

.header:hover::before {
  left: 100%;
}

.logo {
  color: black;
  font-size: 25px;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
  margin-right: auto; /* 使 logo 靠左 */
}

#menu-icon {
  font-size: 36px;
  color: black;
  display: none;
  margin-left: auto; /* 使 menu icon 靠右 */
}

ul {
  list-style: none;
  display: flex;
  justify-content: center; /* 置中整個列表 */
  align-items: center; /* 垂直方向置中 */
  gap: 1rem;
  padding: 0;
  margin: 0;
}
li {
  color: black;
  text-align: center; /* 置中列表項的內容 */
}
a {
  color: grey;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: text-align;
  align-items: center;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 100;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: 0.5s;
}

.header:hover::before {
  left: 100%;
}

.logo {
  color: grey;
  font-size: 25px;
  text-decoration: none;
  font-weight: 600;
  cursor: default;
}

.navbar a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  margin-left: 45px;
  transition: 0.3s;
}

.navbar a:hover {
  color: #f00;
}

#menu-icon {
  font-size: 36px;
  color: #fff;
  display: none;
}

@media (max-width: 992px) {
  .header {
    padding: 1.25rem 4%;
  }
}

@media (max-width: 768px) {
  #menu-icon {
    display: block;
  }

  .navbar {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 0.5rem 4%;
    display: none;
  }

  .navbar.active {
    display: block;
  }

  .navbar a {
    display: block;
    margin: 1.5rem 0;
  }

  .nav-bg {
    position: fixed;
    top: 8.5%;
    left: 0;
    width: 100%;
    height: 295px;
    background: rgba(255, 255, 255, 0.1);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    z-index: 99;
    display: none;
  }

  .nav-bg.active {
    display: block;
  }
}
</style>
