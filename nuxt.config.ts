import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  // i18n: {
  //   lazy: true,
  //   langDir: "locales",
  //   defaultLocale: "uz",
  //   strategy: "prefix",
  //   locales: [
  //     { code: "uz", iso: "uz-UZ", name: "O'zbekcha", file: "uz.json" },
  //     { code: "ru", iso: "ru-RU", name: "Русский", file: "ru.json" },
  //     { code: "en", iso: "en-US", name: "English", file: "en.json" },
  //   ],
  // },
  devtools: { enabled: true },
});