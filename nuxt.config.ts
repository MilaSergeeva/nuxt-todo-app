// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "materialize-css/dist/css/materialize.min.css",
    "~/assets/css/main.css",
  ],

  plugins: [{ src: "~/plugins/materialize.js", mode: "client" }],

  components: true,

  app: {
    head: {
      title: "Todo List",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  compatibilityDate: "2025-02-10",
});
