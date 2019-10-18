import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index.vue'
import Show from '@/views/show.vue'
import Price from '@/views/price.vue'
import Contact from '@/views/contact.vue'

Vue.use(Router)
const routes = [
  { component: Index, path: '/' },
  { component: Show, path: '/show' },
  { component: Price, path: '/price' },
  { component: Contact, path: '/contact' }
]
const router = new Router({ mode: 'history', routes })

export default router
