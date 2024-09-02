import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
    [
      "@nuxtjs/axios",
      {
        baseURL: "https://open-api.bingx.com", // 設置你的 API 基本 URL
        proxyHeaders: true,
        credentials: false,
        proxy: true, // 啟用 axios 代理
      },
    ],
  ],
  // 移除 proxy 設定
  plugins: ["~/plugins/axios.js"],
});
