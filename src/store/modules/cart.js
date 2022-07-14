export default {
    namespaced: true,
    state: () => ({
        cart: [],
    }),

    getters: {
        getCart: state => {
            return state.cart
        },
        getCartLength: (state, getters) => {
            return state.cart.length
        }
    },
    actions: {},
    mutations: {
        setCart: (state, cart) => (state.cart = cart),
        addProductToCart: (state, product) => (state.cart.push(product)),
        clearCart: (state, cart) => (state.cart = [])
    }
}