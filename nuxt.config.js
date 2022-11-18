export default {
  head: {
    title: 'Greenhouse Frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
  },

  css: [
    '~/assets/css/main.css',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],

  auth: {
    redirect: {
      login: '/', // redirect when login is required
      callback: '/auth/signed-in', // landingpage after 
      home: '/dashboard' // redirect after successful login
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
        audience: process.env.AUTH0_AUDIENCE
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: { customProperties: true },
      themes: {
        light: {
          primary: '#5cad8a',
          secondary: '#784C18',
          accent: '#36156B',
          info: '#1C87B8',
          warning: '#B8431C',
          error: '#82251A',
          success: '#189E33'
        }
      }
    }
  },

  axios: {},

  pwa: {
    manifest: {
      lang: 'de',
    },
  },

  build: {},

  watchers: {
    webpack: {
      ignored: '/node_modules/',
    },
  },

  plugins: [
    '~/plugins/format-date.js'
  ],

  publicRuntimeConfig: {
    domain: "greenhouse.home-webserver.de"
  },

  modules: [
  ],
}
