import { RouteRecordRaw } from 'vue-router'

import Empty from '@/views/Empty.vue'

import PickCategory from '@/views/Books/Categories.vue'
import PickBook from '@/views/Books/Books.vue'
import AboutBook from '@/views/Books/AboutBook.vue'

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
      { path: '/books/:id/:id_2', name: 'AboutBook', component: AboutBook },
    ],
  },
]

export default BooksRoutes
