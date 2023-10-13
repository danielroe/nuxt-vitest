import { createStore } from 'idb-keyval'

export default defineNuxtPlugin(nuxt => {
  const store = createStore('my-db', 'my-store')

  return {
    provide: {
      store,
    },
  }
})
