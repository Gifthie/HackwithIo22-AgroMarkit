<template>
    <h3 class="text-gray-700 text-3xl font-medium">Orders</h3>

    <OrdersTable :orders="orders" class="mt-8" />
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
import OrdersTable from '../../components/dashboard/OrdersTable.vue';
import { ref, onMounted } from "vue";
import db from "@/firebase_init.js"
import { collection, query, getDocs, where } from 'firebase/firestore'
import { getAuth } from "@firebase/auth";

const siteTitle = 'AgroMarkit | Orders'
const userID = getAuth().currentUser.uid
const q = query(collection(db, 'orders'))

const modal = ref(null)
const orders = ref([])

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
    orders.value = []
    
    const snapShot = await getDocs(q);
    snapShot.forEach(doc => {
        orders.value.push({id: doc.id, ...doc.data()})
    })
}
</script>
