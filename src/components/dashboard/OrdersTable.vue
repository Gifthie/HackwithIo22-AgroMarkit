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
                                    Order ID
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Customer Name
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Customer Address
                                </th>
                                <th
                                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                                >
                                    Customer Email
                                </th>
                                
                            </tr>
                        </thead>

                        <tbody class="bg-white">
                            <tr v-for="(order, index) in orders" :key="index">
                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <div class="flex items-center">

                                        <div class="ml-4">
                                            <div
                                                class="text-sm font-medium leading-5 text-gray-900"
                                            >
                                                {{ order.id }}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </td>

                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <div
                                        class="text-sm leading-5 text-gray-900"
                                    >
                                        {{ order.name }}
                                    </div>
                                </td>

                                <td
                                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                                >
                                    <span
                                        class="inline-flex px-2 text-xs font-semibold"
                                        >{{ order.delivery_address }}</span
                                    >
                                </td>

                                <td
                                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                                >
                                    {{ order.email }}
                                </td>

                            </tr>
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
    orders: Array
})
</script>

<style lang="scss" scoped></style>
