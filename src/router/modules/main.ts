import { RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Info from '@/views/Info.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
]

export default routes
