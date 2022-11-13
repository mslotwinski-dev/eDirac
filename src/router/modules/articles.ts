import { RouteRecordRaw } from 'vue-router'
import Articles from '@/views/Articles/Index.vue'

const articles: RouteRecordRaw[] = [
  {
    path: '/Articles',
    name: 'Articles',
    component: Articles,
  },
]

export default articles
