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
        },
        getTotalPrice: (state) => {
            return state.cart.reduce((current, next) =>
                parseInt(current) + parseInt(next.price * next.quantity), 0);
        }
    },
    actions: {},
    mutations: {
        setCart: (state, cart) => (state.cart = cart),
        addProductToCart: (state, product) => {
            let item = state.cart.find( i => i.id === product.id)
            if (item) {
                item.quantity++
            } else {
                state.cart.push({...product, quantity: 1})
            }
        },
        removeFromCart: (state, product) => {
            let item = state.cart.find( i => i.id === product.id)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id !== product.id)
                }
            }
        },
        clearCart: (state) => (state.cart = [])
    }
}