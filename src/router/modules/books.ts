import { RouteRecordRaw } from 'vue-router'

import Empty from '@/views/Empty.vue'

import PickCategory from '@/views/Books/Categories.vue'
import PickBook from '@/views/Books/Books.vue'

const BooksRoutes: RouteRecordRaw[] = [
  {
    path: '/books',
    name: 'Books',
    component: Empty,
    children: [
      {
        path: '',
        name: 'Category',
        component: PickCategory,
      },
      { path: '/books/:id', name: 'BookParts', component: PickBook },
    ],
  },
]

export default BooksRoutes
