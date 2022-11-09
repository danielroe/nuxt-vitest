window.__NUXT__ = {
  serverRendered: false,
  config: {
    public: {},
    app: {
      baseURL: '/',
    },
  },
  data: {},
  state: {},
}

// const app = document.createElement('div')
// app.setAttribute('id', '__nuxt')
// document.body.appendChild(app)
// console.log(document.documentElement.outerHTML)

await import('#app/entry')
