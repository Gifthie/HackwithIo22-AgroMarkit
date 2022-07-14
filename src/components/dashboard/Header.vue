<template>
    <header
        class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-green-600"
    >
        <div class="flex items-center">
            <button
                class="text-gray-500 focus:outline-none lg:hidden"
                @click="isOpen = true"
            >
                <svg
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 6H20M4 12H20M4 18H11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>

        <div class="flex items-center">
            <span class="text-sm mr-4">{{ user.displayName }}</span>
            <div class="relative">
                <button
                    class="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none"
                    @click="dropdownOpen = !dropdownOpen"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

                <div
                    v-show="dropdownOpen"
                    class="fixed inset-0 z-10 w-full h-full"
                    @click="dropdownOpen = false"
                ></div>

                <transition
                    enter-active-class="transition duration-150 ease-out transform"
                    enter-from-class="scale-95 opacity-0"
                    enter-to-class="scale-100 opacity-100"
                    leave-active-class="transition duration-150 ease-in transform"
                    leave-from-class="scale-100 opacity-100"
                    leave-to-class="scale-95 opacity-0"
                >
                    <div
                        v-show="dropdownOpen"
                        class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
                    >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white"
                            >Profile</a
                        >
                        <a
                            href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white"
                            >Products</a
                        >
                        <a
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-green-600 hover:text-white"
                            @click="logout"
                            >Log out</a
                        >
                    </div>
                </transition>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { useSidebar } from '@/hooks/useSidebar'
import { getAuth } from "@firebase/auth";

const user = getAuth().currentUser

const dropdownOpen = ref(false)
const { isOpen } = useSidebar()

defineProps({
    logout: Function,
})
</script>
