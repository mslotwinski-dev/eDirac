import { RouteRecordRaw } from 'vue-router'
import PageNotFound from '@/views/Errors/PageNotFound.vue'
import Forbidden from '@/views/Errors/Forbidden.vue'

const errors: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: PageNotFound,
  },
  { path: '/403', name: '403', component: Forbidden },
]

export default errors
