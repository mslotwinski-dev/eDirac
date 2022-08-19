import { RouteRecordRaw } from 'vue-router'
import Errors from './modules/errors'
import Main from './modules/main'
import Books from './modules/books'
import Book from './modules/book'

const routes: RouteRecordRaw[] = [Errors, Main, Books, Book].flat(1)

export default routes
