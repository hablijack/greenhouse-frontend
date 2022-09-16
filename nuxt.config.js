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
    //middleware: ['userSync']
  },

  plugins: [],

  css: [
        '~/assets/css/main.css',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    'nuxt-webfontloader',
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
          primary: '#6B2F1B',
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

  webfontloader: {
    google: {
      families: ['Orbitron:900'],
    }
  },

  plugins: [
    { src: '@/plugins/draggable' }
  ],

  publicRuntimeConfig: {
    backendUrl: process.env.BACKEND_URL || 'http://yggdrasil.fritz.box:5550'
  },

  modules: [
    '@nuxtjs/proxy'
  ],
  proxy: [
    'http://localhost:8080/api/sensors/measurements/socket'
  ]
}
