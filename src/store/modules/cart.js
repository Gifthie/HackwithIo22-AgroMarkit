export default {
    state: () => ({
        cart: []
    }),

    getters: {
        getCart: state => state.cart,
        getCartLength: (state, getters) => {
            return getters.getCart.length
        }
    },
    actions: {},
    mutations: {
        setCart: (state, cart) => (state.cart = cart),
        addProductToCart: (state, product) => (state.cart.push(product)),
        clearCart: (state, cart) => (state.cart = [])
    }
}