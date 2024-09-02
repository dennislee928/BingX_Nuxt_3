import { defineNuxtPlugin } from "#imports"; // 修改此行
import { createI18n } from "vue-i18n";
// 以下語系自行添加
import en from "../locales/en.json";
import tw from "../locales/tw.json";

export default defineNuxtPlugin((nuxtApp: any) => {
  // 修改此行
  const i18n = createI18n({
    locale: "en",
    messages: {
      en: {
        welcome: "Welcome",
      },
      zh: {
        welcome: "歡迎",
      },
    },
  });

  nuxtApp.vueApp.use(i18n);
});
