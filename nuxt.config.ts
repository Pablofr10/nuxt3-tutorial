// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css",
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        vueI18n: "./i18n",
      },
    ],
    "@nuxt/ui",
    "nuxt-auth-utils",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  runtimeConfig: {
    oauth: {
      Google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
      },
      OAUTH: {
        clientId: process.env.NUXT_OAUTH_AUTH0_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_AUTH0_CLIENT_SECRET,
        domain: process.env.NUXT_OAUTH_AUTH0_DOMAIN,
      },
    },
  },
});
