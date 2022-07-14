<template>
    <main class="max-w-5xl p-5 mx-auto my-10 text-center">
        <router-view />
        <div>
            <v-button @click="router.back()"> Go Back </v-button>
        </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useHead } from "@vueuse/head";

useHead({
    title: '404 - Not found!',
})

const router = useRouter()
</script>
