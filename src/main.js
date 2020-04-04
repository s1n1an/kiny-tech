import Vue from 'vue'
import App from './app.vue'
import router from './router.js'
import store from './store.js'

import '@css/global.less'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

new Vue({ router, store, render: (h) => h(App) }).$mount('#app')
