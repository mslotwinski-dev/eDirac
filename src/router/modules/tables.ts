import { RouteRecordRaw } from 'vue-router'
import Tables from '@/views/Tables/Index.vue'

const tables: RouteRecordRaw[] = [
  {
    path: '/Tables',
    name: 'Tables',
    component: Tables,
  },
]

export default tables
