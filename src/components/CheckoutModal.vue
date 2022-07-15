<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <div class="fixed inset-0 z-10 overflow-y-auto bg-black/25">
        <div class="min-h-screen px-6 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <div class="flex justify-between items-center py-2">
                <DialogTitle
                  as="h3"
                  class="md:text-lg w-full font-medium leading-6 text-gray-900"
                >
                  Checkout
                </DialogTitle>

                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  @click="closeModal"
                >
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>

              <div class="mt-6">
                <Form :validation-schema="schema" v-slot="{ errors }" method="POST" class="pb-4 space-y-6 sm:pb-6 xl:pb-8" @submit="() => console.log('paying...')">
                  <div class="z-0 mb-10 w-full group mt-10">
                    <div>
                      <Field v-model="form.name" type="text" name="name" id="" :class="{ 'invalid-input': errors.name }" class="input-style border-gray-200 rounded-lg w-full px-3 py-2" placeholder="Full Name" />
                    </div>


                    <div class="mt-5">
                      <Field v-model="form.email" type="email" name="email" id="" :class="{ 'invalid-input': errors.email }" class="input-style border-gray-200 rounded-lg w-full px-3 py-2" placeholder="Email" />
                    </div>

                    <div class="mt-5">
                      <Field v-model="form.delivery_address" as="textarea" name="delivery_address" id="" class="input-style border-gray-200 rounded-lg w-full px-3 py-2" placeholder="Delivery Address" />
                    </div>
                    
                  </div>
                  <div class="flex justify-center">
                    <Checkout :name="form.name" :email="form.email" :delivery_address="form.delivery_address" />
                  </div>
                </Form>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import Button from "@/components/Button.vue";
import Checkout from "./Checkout.vue"
import { Form, Field } from "vee-validate"
import * as Yup from "yup"
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { reactive, ref } from 'vue';


const isOpen = ref(false)

const form = reactive({
  'delivery_address' : '',
  'name' : '',
  'email' : '',
})



const schema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .required('Price is required'),
    delivery_address: Yup.string()
    .required('Delivery Address is required')

});


function closeModal() {
    isOpen.value = false
}

function openModal() {
    isOpen.value = true
}

defineExpose({ openModal })
</script>