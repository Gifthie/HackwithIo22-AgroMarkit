<template>
  <h3 class="text-gray-700 text-3xl font-medium">Blank Page</h3>
</template>

<route lang="yaml">
meta:
    layout: dashboard
</route>

<script setup>
import { useHead } from "@vueuse/head";

const siteTitle = "AgroMarkit | Dashboard"

useHead({
  title: siteTitle
})

</script>