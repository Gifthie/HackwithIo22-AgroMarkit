<template>
    <div class="mx-auto">
        <div>
            <Popover class="top-0 sticky z-10 bg-white shadow-sm">
                <div
                    class="py-6 border-b border-orange-50 px-4 sm:px-6 lg:px-8"
                >
                    <nav
                        class="flex items-center justify-between sm:h-10"
                        aria-label="Global"
                    >
                        <div
                            class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
                        >
                            <div
                                class="flex items-center justify-between w-full md:w-auto"
                            >
                                <router-link
                                    to="/"
                                    class="flex items-center justify-center"
                                >
                                    <span class="sr-only">Open Menu</span>
                                    <img
                                        alt="Workflow"
                                        class="w-auto h-10"
                                        src="../assets/logo.png"
                                    />
                                    <h2
                                        class="ml-2 font-bold text-xl md:text-2xl text-gray-600 hover:text-green-600"
                                    >
                                        Agro Markit
                                    </h2>
                                </router-link>
                                <div class="-mr-2 flex items-center md:hidden">
                                    <PopoverButton
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span class="sr-only"
                                            >Open main menu</span
                                        >
                                        <MenuIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>
                                </div>
                            </div>
                        </div>
                        <div
                            class="hidden md:block md:ml-10 md:pr-4 md:space-x-8"
                        >
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="item.href"
                                class="font-medium text-gray-500 hover:text-gray-900"
                                >{{ item.name }}</router-link
                            >
                            <a
                                href="/register"
                                class="font-medium text-gray-500 hover:text-gray-900"
                                target="_blank"
                                >Register</a
                            >
                        </div>
                    </nav>
                </div>

                <transition
                    enter-active-class="duration-150 ease-out"
                    enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-100 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95"
                >
                    <PopoverPanel
                        focus
                        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div
                            class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
                        >
                            <div
                                class="px-5 pt-4 flex items-center justify-between"
                            >
                                <div>
                                    <img
                                        class="h-8 w-auto"
                                        src="../assets/logo.png"
                                        alt=""
                                    />
                                </div>
                                <div class="-mr-2">
                                    <PopoverButton
                                        class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        <span class="sr-only"
                                            >Close main menu</span
                                        >
                                        <XIcon
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div class="px-2 pt-2 pb-3 space-y-1">
                                <a
                                    v-for="item in navigation"
                                    :key="item.name"
                                    :href="item.href"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >{{ item.name }}</a
                                >
                                <a
                                    href="https://forms.gle/THUBKiaoQuWwFHfc6"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >Register</a
                                >
                            </div>
                        </div>
                    </PopoverPanel>
                </transition>
            </Popover>

            <main class="flex-1 w-full">
                <router-view v-slot="{ Component, route }">
                    <transition name="fade" mode="out-in">
                        <div :key="route.name">
                            <component :is="Component"></component>
                        </div>
                    </transition>
                </router-view>
            </main>

            <footer
                class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800"
            >
                <div class="flex items-center justify-center sm:mb-8 my-3">
                    <a href="/" class="flex items-center mb-0">
                        <img
                            src="../assets/logo.png"
                            class="mr-3 h-8"
                            alt="Parakletus Logo"
                        />
                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                            >AgroMarkit</span
                        >
                    </a>
                </div>

                <span
                    class="block text-sm text-gray-500 text-center dark:text-gray-400 mt-4"
                    >© 2022 <a href="/" class="hover:underline">AgroMarkit</a>.
                    All Rights Reserved.
                </span>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [{ name: 'Login', href: '/login' }]
</script>
