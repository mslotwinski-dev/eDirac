import { RouteRecordRaw } from 'vue-router'
import Errors from './modules/errors'
import Main from './modules/main'
import Books from './modules/books'
import Book from './modules/book'
import Legal from './modules/legal'
import Articles from './modules/articles'
import Tables from './modules/tables'

const routes: RouteRecordRaw[] = [
  Errors,
  Main,
  Books,
  Book,
  Articles,
  Tables,
  Legal,
].flat(1)

export default routes
