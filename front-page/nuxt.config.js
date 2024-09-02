export default {
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    baseURL: "https://open-api.bingx.com", // 設置你的 API 基本 URL
    proxy: true, // 啟用代理
  },
  proxy: {
    "/api/": {
      target: "https://open-api.bingx.com",
      changeOrigin: true,
      pathRewrite: { "^/api/": "" },
    },
  },
  plugins: ["~/plugins/axios.js"],
};
