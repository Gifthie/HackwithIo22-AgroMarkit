<template>
  <div
    class="text-center py-10 md:py-28 bg-no-repeat bg-center bg-cover relative bg-gray-50"
    id="home"
  >
    <h1
      class="
        text-4xl
        mt-10
        md:mt-20
        tracking-tight
        font-extrabold
        text-gray-100
        sm:text-5xl
        md:text-6xl
      "
    >
      <span class="block xl:inline text-gray-600">Welcome to</span>
      {{ " " }}
      <span class="block text-green-700 xl:inline circle-sketch-highlight"
        >Agro Markit</span
      >
    </h1>
    <p
      class="
        mt-5
        text-base text-gray-600
        sm:mt-5 sm:text-lg
        md:mt-5 md:text-xl
        lg:mx-0
      "
    >
      Deploying Technology to Solving Africa’s Education Problems.
    </p>
    <div class="mt-8 lg:mt-10 flex justify-center items-center">
      <div class="rounded-md shadow">
        <a
          href="https://forms.gle/THUBKiaoQuWwFHfc6"
          class="
            w-full
            flex
            items-center
            justify-center
            px-8
            py-3
            border border-transparent
            text-base
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            md:py-4 md:text-lg md:px-10
          "
        >
          Book a Seat
        </a>
      </div>
      <div class="mt-0 ml-2 sm:ml-3">
        <a
          href="/about"
          class="
            w-full
            flex
            items-center
            justify-center
            px-8
            py-3
            border border-transparent
            text-base
            font-medium
            rounded-md
            text-white
            bg-[#ef8c22]
            hover:bg-orange-600
            md:py-4 md:text-lg md:px-10
          "
        >
          Learn More
        </a>
      </div>
    </div>
  </div>

  <section class="relative bg-white overflow-hidden shadow-lg shadow-orange-50">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
        <div class="sm:max-w-lg">
          <h1 class="text-3xl text-center lg:text-left bg-clip-text font-extrabold tracking-tight bg-gradient-to-l text-transparent from-indigo-400 to-indigo-800 sm:text-6xl">About Explore</h1>
          <p class="mt-4 text-lg text-gray-500">
            Explore is a digital skill acquisition programme organized by Parakletus Hub Nigeria aimed at equipping 1000 Nigerian youth with in-demand digital skills necessary to thrive in an ever evolving economy.
          </p>
        </div>
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      <img src="../assets/1.png" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/2.png" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/logo-img.jpg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/1.png" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/logo-img.jpg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                  <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/2.png" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                    <div class="w-44 h-64 rounded-lg overflow-hidden">
                      <img src="../assets/logo-img.jpg" alt="" class="w-full h-full object-center object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="/about" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-50" id="speakers">
    <div class="py-16 sm:py-24">
      <h1 class="text-3xl text-center bg-clip-text font-extrabold tracking-tight bg-gradient-to-l text-transparent from-indigo-400 to-indigo-800">Our Speakers</h1>

      <div class="flex flex-wrap justify-center px-4 mt-8">
        <div v-for="(speaker, index) in speakers" :key="index" class="relative h-80 w-80 flex shrink items-end justify-center bg-cover bg-center bg-no-repeat mx-2 my-2 rounded-lg" :style="`background-image:url(${speaker.img});`">
          <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          
          <main class="p-5 z-10 text-center">
            <router-link :to="{ name: 'speaker', params: { slug: speaker.slug } }" class="text-lg text-center tracking-tight font-bold leading-7 text-white hover:underline">
              {{ speaker.name }}
            </router-link>
            <div class="text-center text-white">{{ speaker.position }}</div>
          </main>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-50" id="sponsors">
    <div class="py-16 sm:py-24">
      <h1 class="text-3xl text-center bg-clip-text font-extrabold tracking-tight bg-gradient-to-l text-transparent from-indigo-400 to-indigo-800">Our Partners / Sponsors</h1>

      <div class="flex flex-wrap justify-center px-4 mt-8">
        <div v-for="(sponsor, index) in sponsors" :key="index" class="relative h-80 w-80 flex shrink items-end justify-center bg-cover bg-center bg-no-repeat mx-2 my-2 rounded-lg" :style="`background-image:url(${sponsor.img});`">
          <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          
          <main class="p-5 z-10 text-center">
            <a :href="sponsor.url" class="text-xl text-center tracking-tight leading-7 font-bold text-white hover:underline" target="_blank">
              {{ sponsor.name }}
            </a>
          </main>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { onMounted, ref } from "vue";

const siteName = 'Home | AgroMarkit'

useHead({
  title: siteName
})
</script>

<style scoped>
.circle-sketch-highlight:before {
  content: "";
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
.circle-sketch-highlight:after {
  content: "";
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
background-image: url("../assets/bg.png");
background-position: top center;
}
</style>

