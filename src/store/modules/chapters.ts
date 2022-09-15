import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'chapters' })
class ChaptersModule extends VuexModule {
  bookChapter: { [index: string]: string } = {
    '16741766': localStorage.getItem('book_chapter_16741766') || 'Idea.vue',
    '16741767': localStorage.getItem('book_chapter_16741767') || 'Idea.vue',

    '18851002': localStorage.getItem('book_chapter_18851002') || 'Idea.vue',
  }

  get getBookChapters(): { [index: string]: string } {
    return this.bookChapter
  }

  @Mutation
  setBookChapter(data: { book: string; subject: string }): void {
    this.bookChapter[data.book] = data.subject
    localStorage.setItem(`book_chapter_${data.book}`, data.subject)
  }
}

export default ChaptersModule
