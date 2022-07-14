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
            <span class="block text-green-700 xl:inline circle-sketch-highlight"
                >Agro Markit</span
            >
        </h1>
        <p
            class="mt-5 text-base text-gray-600 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0"
        >
            Deploying Technology to Solving Africa’s Education Problems.
        </p>
        <div class="mt-8 lg:mt-10 flex justify-center items-center">
            <div class="rounded-md shadow">
                <a
                    href="https://forms.gle/THUBKiaoQuWwFHfc6"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                    Book a Seat
                </a>
            </div>
            <div class="mt-0 ml-2 sm:ml-3">
                <a
                    href="/about"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ef8c22] hover:bg-orange-600 md:py-4 md:text-lg md:px-10"
                >
                    Learn More
                </a>
            </div>
        </div>
    </div>

    <section
        class="relative bg-white overflow-hidden shadow-lg shadow-orange-50"
    >
        <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div
                class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static"
            >
                <div class="sm:max-w-lg">
                    <h1
                        class="text-3xl text-center lg:text-left bg-clip-text font-extrabold tracking-tight bg-gradient-to-l text-transparent from-indigo-400 to-indigo-800 sm:text-6xl"
                    >
                        About Explore
                    </h1>
                    <p class="mt-4 text-lg text-gray-500">
                        Explore is a digital skill acquisition programme
                        organized by Parakletus Hub Nigeria aimed at equipping
                        1000 Nigerian youth with in-demand digital skills
                        necessary to thrive in an ever evolving economy.
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
.circle-sketch-highlight::before {
    content: '';
    z-index: -1;
    border-width: 2px;
    border-style: solid;
    border-color: #ef8c22;
    border-right-color: transparent;
    width: 100%;
    height: 1em;
    transform: rotate(2deg);
    opacity: 0.7;
    padding: 0.1em 0.25em;
}

.circle-sketch-highlight::after {
    content: '';
    z-index: -1;
    padding: 0.1em 0.25em;
    border-width: 2px;
    border-style: solid;
    border-color: #ef8c22;
    border-left-color: transparent;

    /* border-top-color:transparent; */
    width: 100%;
    height: 1em;
    transform: rotate(-1deg);
    opacity: 0.7;
}

#home {
    background-image: url('../assets/bg.png');
    background-position: top center;
}
</style>
