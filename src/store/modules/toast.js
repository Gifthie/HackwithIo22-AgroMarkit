export default {
    namespaced: true,
    state: () => ({
        status: false,
        message: '',
        type: '',
    }),

    mutations: {
        setToast(state, { status, message, type }) {
            state.status = status
            state.message = message
            state.type = type
        },
        closeToast(state) {
            state.status = false
            state.message = ''
            state.type = ''
        },
    },

    actions: {},

    getters: {
        getToast(state) {
            return {
                status: state.status,
                message: state.message,
                type: state.type,
            }
        },
    },
}
