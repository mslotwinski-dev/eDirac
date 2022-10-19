import { RouteRecordRaw } from 'vue-router'

import Empty from '@/views/Empty.vue'
import About from '@/views/Book/About.vue'

import Book from '@/views/Book/Book.vue'
import Table from '@/views/Book/Table.vue'
import PDF from '@/views/Book/PDF.vue'
import Buy from '@/views/Book/Buy.vue'

const BookRoutes: RouteRecordRaw[] = [
  {
    path: '/book',
    name: 'Book',
    component: Empty,
    children: [
      { path: ':id_2', name: 'AboutBook', component: About },
      {
        path: ':id/online',
        name: 'BookView',
        component: Book,
      },
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

export default BookRoutes
