import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import store from './store'
import './index.css'
import './assets/styles.css'
import { createHead } from '@vueuse/head'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDbQnJ3rrjRoug7ZrFmbf_Ub-5GqH-VoQA",
    authDomain: "agro-markit.firebaseapp.com",
    projectId: "agro-markit",
    storageBucket: "agro-markit.appspot.com",
    messagingSenderId: "143237342534",
    appId: "1:143237342534:web:d7cf1472c3545ac1dab147"
};

initializeApp(firebaseConfig);

const head = createHead()
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App).use(router).use(store).use(head)

await router.isReady()
app.mount('#app')
