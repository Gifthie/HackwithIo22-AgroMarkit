<template>
    <div class="flex h-screen bg-gray-200 font-roboto">
        <Sidebar />

        <div class="flex-1 flex flex-col overflow-hidden">
            <Header :logout="logout" />

            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div class="container mx-auto px-6 py-8">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import Sidebar from "@/components/dashboard/Sidebar.vue";
import Header from "@/components/dashboard/Header.vue";
import { getAuth, signOut, onAuthStateChanged } from "@firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const auth = getAuth()
const isLoggedIn = ref(false)
const router = useRouter()
const store = useStore()

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true
        } else {
            isLoggedIn.value = false
        }
    })
})

async function logout() {
    signOut(auth)
    .then(() => {
        console.log('logged out')
        store.commit("toast/setToast", {
            type: "success",
            message: "Logout Successful",
            status: true,
        });
        router.push("/login")        
    })
    .catch(error => {
        console.log(error)
    })
}
</script>