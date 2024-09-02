import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";
// 以下語系自行添加
import en from "../locales/en.json";
import tw from "../locales/tw.json";

export default defineNuxtPlugin((nuxtApp) => {
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
