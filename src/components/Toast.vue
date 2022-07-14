<template>
    <transition name="toast-transition">
        <div
            :class="`toast flex p-4 mb-4 rounded-lg toast-${toast.type}`"
            role="alert"
        >
            <svg
                class="flex-shrink-0 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                ></path>
            </svg>
            <div class="ml-3 text-sm font-medium">
                {{ toast.message }}
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'BaseToast',
    computed: {
        ...mapGetters({
            toast: 'toast/getToast',
        }),
    },
    mounted() {
        setTimeout(() => {
            this.$store.commit('toast/closeToast')
        }, 3000)
    },
}
</script>

<style scoped>
.toast {
    @apply absolute top-10 rounded-md right-0 text-sm max-w-xl py-3 px-5 bg-gray-100;

    z-index: 100;
}

.toast-error {
    @apply dark:bg-red-200 bg-red-100 text-red-700 dark:text-red-800;
}

.toast-success {
    @apply dark:bg-green-200 bg-green-100 text-green-700 dark:text-green-800;
}

.toast-warning {
    @apply dark:bg-yellow-200 bg-yellow-100 text-yellow-700 dark:text-yellow-800;
}

.toast-info {
    @apply dark:bg-blue-200 bg-blue-100 text-blue-700 dark:text-blue-800;
}

.toast-transition-enter-active,
.toast-transition-leave-active {
    @apply transition-all ease-in-out duration-300;
}

.toast-transition-enter-from,
.toast-transition-leave-to {
    @apply opacity-0 translate-x-10;
}

.toast-transition-enter-to {
    @apply opacity-100 translate-x-0;
}
</style>
