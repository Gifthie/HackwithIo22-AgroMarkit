import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import './index.css'
import './assets/styles.css'
import './firebase_init.js'
import { createHead } from '@vueuse/head'
import { onAuthStateChanged, getAuth } from 'firebase/auth'


const head = createHead()
const auth = getAuth()
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(auth, (user) => {
            removeListener()
            resolve(user)
        }, reject)
    })
}

router.beforeEach(async (to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (await getCurrentUser()) {
        next()
        return
      }
      store.commit("toast/setToast", {
        type: "error",
        message: "You have to login first.",
        status: true,
      });
      next('/login')
    } else {
      next()
    }
})



const app = createApp(App).use(router).use(store).use(head)

await router.isReady()
app.mount('#app')
