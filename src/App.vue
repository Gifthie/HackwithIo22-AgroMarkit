<template>
    <div>
      <Toast v-if="toast.status" />
          <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">
              <div :key="route.name">  
                <component :is="Component"></component>
              </div>
            </transition>
          </router-view>
    </div>
    
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const toast = computed(() => store.getters["toast/getToast"])
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
