<template>
    <div>
        <div class="flex flex-col mt-8">
            <div
                class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
                <div
                    class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
                >
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Name
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Category
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Price
                                </th>
                                
                                <th
                                    class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                                ></th>
                            </tr>
                        </thead>

                        <tbody class="bg-white">
                            <tr v-if="products.length !== 0" v-for="(product, index) in products" :key="index">
                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <div class="flex items-center">
                                        

                                        <div class="ml-4">
                                            <div
                                                class="text-sm font-medium leading-5 text-gray-900"
                                            >
                                                {{ product.name }}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <div
                                        class="text-sm leading-5 text-gray-500 capitalize"
                                    >
                                        {{ product.category }}
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <div
                                        class="text-sm leading-5 text-gray-500"
                                    >
                                        {{ product.price }}
                                    </div>
                                </td>

                                <td></td>

                            </tr>

                            <Spinner v-else />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import Spinner from "../Spinner.vue";


defineProps({
    products: Array
})
</script>

<style lang="scss" scoped></style>
