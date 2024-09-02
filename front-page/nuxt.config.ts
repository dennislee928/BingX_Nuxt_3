import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxyHeaders: true,
    credentials: false,
  },
  proxy: {
    "/api/": {
      target: "https://open-api.bingx.com",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },
  plugins: ["~/plugins/axios.js"],
});
