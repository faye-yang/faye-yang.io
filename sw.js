importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16cb5de9f8516362b29e.js",
    "revision": "b5564b1529696ca703d424ed7d7bb66b"
  },
  {
    "url": "/_nuxt/34635b6f935212d56a34.js",
    "revision": "816d3bbeb1921b4b33c41595a6ba2d27"
  },
  {
    "url": "/_nuxt/4a8778990935c832fab9.js",
    "revision": "85aa877be00aea0e4d76dfa310e9a782"
  },
  {
    "url": "/_nuxt/553f2b91d570952a745b.js",
    "revision": "a66c3a4bf76a7da7549e4dfe911df3d6"
  },
  {
    "url": "/_nuxt/646d4711ec39e4c7f8a8.js",
    "revision": "2fb888eac7e6821a77a79fa0c7c58fd1"
  },
  {
    "url": "/_nuxt/6ab1295be9b6bb4e5343.js",
    "revision": "bbff3cda377c6ab5154159f6a393b530"
  },
  {
    "url": "/_nuxt/f406be8a942b4ce26ad3.js",
    "revision": "e2f122c016a2ab0df95cf3e4d658eb1a"
  }
], {
  "cacheId": "personal-nuxt-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
