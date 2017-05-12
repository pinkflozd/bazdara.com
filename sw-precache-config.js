module.exports = {
  cacheId: 'bazdara-app-v2',

  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/src/bazdara-icons/font/fontello.woff2?40347705',
    '/src/bazdara-icons/font/fontello.woff?40347705',
    '/src/bazdara-icons/font/fontello.ttf?40347705',
    '/images/vreme/**/*.*',
    '/images/map/**/*.*',
    '/bower_components/leaflet/dist/images/layers.png',
    '/locales/*.*',
  ],
  navigateFallback: '/index.html',

  navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],

  runtimeCaching: [{
      /* Google Analytics */
      urlPattern: /https?:\/\/((www|ssl)\.)?google-analytics\.com\/analytics.js/,
      handler: 'networkFirst'
    }, {
      urlPattern: /https?:\/\/fonts.+/,
      handler: 'cacheFirst'
    }, {
      urlPattern: /^https:\/\/x\.bazdara\.com\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /^https:\/\/firebasestorage\.googleapis\.com\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /^https:\/\/bazdara\-99a47\.firebaseio\.com\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /^https:\/\/cdn\.polyfill\.io\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /^https:\/\/ogcie\.iblsoft\.com\/.*/,
      handler: 'networkFirst'
    },
    {
      urlPattern: /^https:\/\/cartodb\-basemaps\-a\.global\.ssl\.fastly\.net\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 500,
          name: 'map1-cache'
        }
      }
    },
    {
      urlPattern: /^https:\/\/x\.bazdara\.com\/arcgis\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 1000,
          name: 'map3-cache'
        }
      }
    },
    {
      urlPattern: /\/images\/.*/,
      handler: 'cacheFirst',
      options: {
        cache: {
          maxEntries: 200,
          name: 'images-cache'
        }
      }
    }
  ]

};
