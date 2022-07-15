<template>
    <div
        id="home"
        class="text-center py-10 md:py-28 bg-no-repeat bg-center bg-cover relative bg-gray-50"
    >
        <h1
            class="text-4xl mt-10 md:mt-20 tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl"
        >
            <span class="block xl:inline text-gray-600">Welcome to</span>
            {{ ' ' }}
            <span class="block text-green-700 xl:inline"
                >Agro Markit</span
            >
        </h1>
        <p
            class="mt-5 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0"
        >
            <!-- Deploying Technology to Solving Africa’s Education Problems. -->
        </p>
        <div class="mt-8 lg:mt-10 flex justify-center items-center px-6">
            <div class="rounded-md shadow">
                <router-link
                    to="/register"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                    Register as a seller
                </router-link>
            </div>
            <div class="mt-0 ml-2 sm:ml-3">
                <a
                    href="/products"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ef8c22] hover:bg-orange-600 md:py-4 md:text-lg md:px-10"
                >
                    Shop for items
                </a>
            </div>
        </div>
    </div>

    <section
        class="relative bg-white overflow-hidden shadow-lg shadow-orange-50"
        id
    >
        <div class="pt-14 pb-80 sm:pt-22 sm:pb-40 lg:pt-36 lg:pb-48">
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static"
            >
                <div class="sm:max-w-lg">
                    <h1
                        class="text-3xl text-center lg:text-left bg-clip-text font-extrabold tracking-tight bg-gradient-to-l text-transparent from-green-400 to-green-800 sm:text-6xl"
                    >
                        About AgroMarkit
                    </h1>
                    <p class="mt-4 text-lg text-gray-500">
                        AgroMarkit aims to bridge the gap between farmers and consumers - solving the communication problem - and, in
                        addition, facilitating logistics and transportation by providing cost estimates.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useHead } from '@vueuse/head'

const siteName = 'Home | AgroMarkit'

useHead({
    title: siteName,
})
</script>

<style scoped>

#home {
    /* background-image: url('../assets/bg.png'); */
    background-position: top center;
}
</style>
