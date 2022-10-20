import { RouteRecordRaw } from 'vue-router'
import Rules from '@/views/Legal/Rules.vue'
import Privacy from '@/views/Legal/Privacy.vue'

const legal: RouteRecordRaw[] = [
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
  { path: '/privacy', name: 'Privacy', component: Privacy },
]

export default legal
