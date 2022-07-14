<template>
    <div class="flex h-screen">
        <section class="md:w-1/2 w-full lg:px-16 px-4 my-auto">
            <div class="
            bg-white
            rounded-lg
          ">
                <div class="mt-4 lg:px-6 px-3 text-center md:text-left">
                    <h3 class="font-semibold text-xl">Register an Account</h3>
                    <p class="text-gray-500 mb-6 mt-4 text-sm">
                        Fill the form below to register your account
                    </p>
                </div>

                <Form :validation-schema="schema" v-slot="{ errors }" method="POST" @submit="register" action="#"
                    class="md:px-6 sm:px-32 px-10 mt-4">
                    <div>
                        <label for="email">Email</label>
                        <Field v-model="form.email" type="email" name="email" :class="{ 'invalid-input': errors.email }"
                            class="input-style border-gray-300 rounded-lg w-full px-3 py-4 tracking-widest"
                            placeholder="Email" autocomplete="" />
                        <span class="invalid-message">{{ errors.email }}</span>
                    </div>

                    <div class="mt-5 relative w-full">
                        <EyeIcon v-if="hidePassword"
                            class="absolute inset-y-10 px-3 h-7 right-0 text-accent cursor-pointer"
                            @click="togglePassword" />
                        <EyeOffIcon v-else class="absolute inset-y-10 px-3 h-7 right-0 text-accent cursor-pointer"
                            @click="togglePassword" />

                        <label for="password">Password</label>
                        <Field v-model="form.password" :type="hidePassword ? 'password' : 'text'" name="password"
                            :class="{ 'invalid-input': errors.password }"
                            class="input-style border-gray-300 rounded-lg w-full px-3 py-4 tracking-widest"
                            placeholder="Password" autocomplete="" />
                        <span class="invalid-message">{{ errors.password }}</span>
                    </div>

                    <div class="flex items-center">
                        <Button class="mt-16 mx-auto lg:w-1/3 flex items-center justify-center" :disabled="loading">
                            <Spinner v-if="loading" />
                            <span v-else>Register</span>
                        </Button>
                    </div>

                </Form>
            </div>
        </section>

        <section class="h-full w-1/2 md:block hidden" id="right-side">
            <img src="../assets/login-bg.jpg" alt="" class="h-full w-full object-cover">
        </section>
    </div>
</template>

<route lang="yaml">
meta:
    layout: auth
</route>

<script setup>
import Button from "@/components/Button.vue"
import Spinner from "@/components/Spinner.vue"
import { Form, Field } from "vee-validate"
import * as Yup from "yup"
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/solid"
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { useHead } from "@vueuse/head";

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const siteTitle = "AgroMarkit | Register"
const auth = getAuth()
useHead({
    title: siteTitle
})

const form = reactive({
    email: '',
    password: ''
})
const hidePassword = ref(true)
const loading = ref(false)
const router = useRouter()
const store = useStore()

const schema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

function togglePassword() {
    hidePassword.value = !hidePassword.value
}

async function register() {
    loading.value = true
    createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((data) => {
            console.log('Successfully registered!');
            router.push('/')
        })
        .catch(error => {
            console.log(error)
            alert(error.message);
        });

    loading.value = false
}

</script>

<style scoped>
</style>