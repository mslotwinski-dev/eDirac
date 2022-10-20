import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

import * as CategoriesModule from '@/data/books/categories'
import { Category } from '@/data/types/book'

@Module({ name: 'books' })
class BooksModule extends VuexModule {
  Chapters = (() => {
    const Chapters: { [key: string]: string } = {}

    for (const i of Object.values({ ...CategoriesModule })
      .map((cat: Category) => cat.Books)
      .flat(1)
      .map((book) => book.ID)) {
      Chapters[i] = localStorage.getItem(`book_chapter_${i}`) || 'Idea.vue'
    }
    return Chapters
  })()

  get getBookChapters(): { [index: string]: string } {
    return this.Chapters
  }

  @Mutation
  setBookChapter(data: { book: string; subject: string }): void {
    this.Chapters[data.book] = data.subject
    localStorage.setItem(`book_chapter_${data.book}`, data.subject)
  }
}

export default BooksModule
