import { RouteRecordRaw } from 'vue-router'

import Empty from '@/views/Empty.vue'
import Book from '@/views/Book/Book.vue'

const BookRoutes: RouteRecordRaw[] = [
  {
    path: '/book',
    name: 'Book',
    component: Empty,
    children: [
      {
        path: ':id',
        name: 'BookView',
        component: Book,
      },
    ],
  },
]

export default BookRoutes
