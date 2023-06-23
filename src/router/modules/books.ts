import { RouteRecordRaw } from 'vue-router'

import PickBook from '@/views/Books/Categories.vue'

import Empty from '@/views/Empty.vue'

import Book from '@/views/Book/Book.vue'
import Table from '@/views/Book/Table.vue'
import PDF from '@/views/Book/PDF.vue'
import Buy from '@/views/Book/Buy.vue'

const BooksRoutes: RouteRecordRaw[] = [
  {
    path: '/books',
    name: 'Books',
    component: PickBook,
  },
  {
    path: '/book',
    name: 'Book',
    component: Empty,
    children: [
      { path: ':id', name: 'BookView', component: Book },
      {
        path: ':id/toc',
        name: 'BookTable',
        component: Table,
      },
      {
        path: ':id/pdf',
        name: 'BookPDF',
        component: PDF,
      },
      {
        path: ':id/buy',
        name: 'BookBuy',
        component: Buy,
      },
    ],
  },
]

export default BooksRoutes
