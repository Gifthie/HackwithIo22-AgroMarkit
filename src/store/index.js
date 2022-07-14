import { createStore, createLogger } from 'vuex'

import user from './modules/user'
import toast from './modules/toast'
import cart from './modules/cart'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        user,
        toast,
        cart
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default store
