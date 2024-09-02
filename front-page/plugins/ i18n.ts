import { createI18n } from "vue-i18n";
// 以下語系自行添加
import en from "../locales/en.json";
import tw from "../locales/tw.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    // 以下引入各語系
    messages: {
      en,
      tw,
    },
  });

  vueApp.use(i18n);
});
function defineNuxtPlugin(arg0: ({ vueApp }: { vueApp: any }) => void) {
  throw new Error("Function not implemented.");
}
