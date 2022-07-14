<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-4xl font-bold text-center">Products</h2>

      <div class="mt-8 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-if="products.length !== 0" v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="w-full bg-gray-200 rounded-lg overflow-hidden">
            <img :src="product.image_url" :alt="product.imageAlt" class="w-full h-full object-center object-cover group-hover:opacity-75" />
          </div>

          <div class="flex justify-between items-center">
              <div>
                  <h3 class="mt-4 text-sm text-gray-700">
                    {{ product.name }}
                  </h3>
                  <p class="mt-1 text-lg font-medium text-gray-900">
                    NGN {{ product.price }}
                  </p>
              </div>
              <Button @click="addToCart(product)">Add to Cart</Button>
          </div>
        </a>

        <Spinner v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue';
import Button from '../components/Button.vue';
import db from "@/firebase_init.js"
import { collection, query, getDocs } from 'firebase/firestore'
import Spinner from '../components/Spinner.vue';
import { useStore } from 'vuex';

const q = query(collection(db, 'products'))

const store = useStore()

const siteName = 'Home | Products'

useHead({
    title: siteName,
})

const products = ref([])

async function fetchProducts() {
    products.value = []
    
    const snapShot = await getDocs(q);
    snapShot.forEach(doc => {
        products.value.push(doc.data())
    })
}

function addToCart(product) {
  store.commit('cart/addProductToCart', product);
  store.commit('toast/setToast', {
      type: 'success',
      message: 'Added to Cart',
      status: true,
  })
}

onMounted(() => {
    fetchProducts()
})
</script>