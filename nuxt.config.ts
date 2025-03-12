// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Neue Regrade': [600]
    }
  }
})