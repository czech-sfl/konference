import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  modules: ['@nuxtjs/seo'],
  css: ['~/src/style.css'],
  components: [{ path: '~/src/components', pathPrefix: false }],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ddff89' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    name: 'Legalizujme II',
    description: 'Největší konference o legalizaci a válce proti drogám',
    defaultLocale: 'cs'
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
});
