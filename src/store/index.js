import { createStore, createLogger } from 'vuex'

import user from './modules/user'
import toast from './modules/toast'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
    modules: {
        user,
        toast
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})

export default store
