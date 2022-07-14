<template>
    <AddProductModal ref="modal" />
    <h3 class="text-gray-700 text-3xl font-medium">Products</h3>
    <Button class="mt-8" @click="openModal" @reload="">Add Product</Button>
    
    <ProductsTable :products="products" class="mt-8" />
</template>

<route lang="yaml">
meta:
    layout: dashboard
    requiresAuth: true
</route>

<script setup>
import { useHead } from '@vueuse/head'
import Button from '../../components/Button.vue';
import AddProductModal from '../../components/dashboard/AddProductModal.vue';
import ProductsTable from '../../components/dashboard/ProductsTable.vue';
import { ref, onMounted } from "vue";
import db from "@/firebase_init.js"
import { collection, query, getDocs, where } from 'firebase/firestore'
import { getAuth } from "@firebase/auth";

const siteTitle = 'AgroMarkit | Products'
const userID = getAuth().currentUser.uid
const q = query(collection(db, 'products'), where("seller_id", "==", userID))

const modal = ref(null)
const products = ref([])

useHead({
    title: siteTitle,
})

function openModal() {
    modal.value.openModal()
}

onMounted(async () => {
    loadData()
})

async function loadData() {
    products.value = []
    
    const snapShot = await getDocs(q);
    snapShot.forEach(doc => {
        products.value.push(doc.data())
    })
}
</script>
