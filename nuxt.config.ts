export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@pinia/nuxt",
    "@formkit/nuxt",
    "vue3-carousel-nuxt",
    "@nuxtjs/i18n",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  headlessui: {
    prefix: "Headless",
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  formkit: {
    autoImport: true,
    configFile: "./formkit-configs/formkit.config.js",
  },
  carousel: {
    prefix: "MyPrefix",
  },
  css: ["./assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Ship-IT",
      script: [{}],
      noscript: [],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      // htmlAttrs: { dir: 'ltr' },
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
