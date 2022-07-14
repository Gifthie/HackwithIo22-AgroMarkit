<template>
  <h3 class="text-gray-700 text-3xl font-medium">Products</h3>

  <OrdersTable class="mt-8" />
</template>

<route lang="yaml">
meta:
    layout: dashboard
    requiresAuth: true
</route>

<script setup>
import { useHead } from "@vueuse/head";
import OrdersTable from "../../components/dashboard/OrdersTable.vue";

const siteTitle = "AgroMarkit | Products"

useHead({
  title: siteTitle
})

</script>