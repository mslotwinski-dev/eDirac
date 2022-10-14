import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'chapters' })
class ChaptersModule extends VuexModule {
  bookChapter: { [index: string]: string } = {
    '57046161': localStorage.getItem('book_chapter_57046161') || 'Idea.vue',
    '57046162': localStorage.getItem('book_chapter_57046162') || 'Idea.vue',
    '57046163': localStorage.getItem('book_chapter_57046163') || 'Idea.vue',
    '57046164': localStorage.getItem('book_chapter_57046164') || 'Idea.vue',
    '57046165': localStorage.getItem('book_chapter_57046165') || 'Idea.vue',
    '57046166': localStorage.getItem('book_chapter_57046166') || 'Idea.vue',
    '57046167': localStorage.getItem('book_chapter_57046167') || 'Idea.vue',
    '57046168': localStorage.getItem('book_chapter_57046168') || 'Idea.vue',
    '57046169': localStorage.getItem('book_chapter_57046169') || 'Idea.vue',
    '57046170': localStorage.getItem('book_chapter_57046170') || 'Idea.vue',

    '16741766': localStorage.getItem('book_chapter_16741766') || 'Idea.vue',
    '16741767': localStorage.getItem('book_chapter_16741767') || 'Idea.vue',
    '16741768': localStorage.getItem('book_chapter_16741768') || 'Idea.vue',
    '16741769': localStorage.getItem('book_chapter_16741769') || 'Idea.vue',
    '16741770': localStorage.getItem('book_chapter_16741770') || 'Idea.vue',
    '16741771': localStorage.getItem('book_chapter_16741771') || 'Idea.vue',
    '16741772': localStorage.getItem('book_chapter_16741772') || 'Idea.vue',
    '16741773': localStorage.getItem('book_chapter_16741773') || 'Idea.vue',
    '16741774': localStorage.getItem('book_chapter_16741774') || 'Idea.vue',

    '18851002': localStorage.getItem('book_chapter_18851002') || 'Idea.vue',
    '18851003': localStorage.getItem('book_chapter_18851003') || 'Idea.vue',
    '18851004': localStorage.getItem('book_chapter_18851004') || 'Idea.vue',
    '18851005': localStorage.getItem('book_chapter_18851005') || 'Idea.vue',
    '18851006': localStorage.getItem('book_chapter_18851006') || 'Idea.vue',
    '18851007': localStorage.getItem('book_chapter_18851007') || 'Idea.vue',
    '18851008': localStorage.getItem('book_chapter_18851008') || 'Idea.vue',
    '18851009': localStorage.getItem('book_chapter_18851009') || 'Idea.vue',
    '18851010': localStorage.getItem('book_chapter_18851010') || 'Idea.vue',

    '74921401': localStorage.getItem('book_chapter_74921401') || 'Idea.vue',
    '74921402': localStorage.getItem('book_chapter_74921402') || 'Idea.vue',
    '74921403': localStorage.getItem('book_chapter_74921403') || 'Idea.vue',
    '74921404': localStorage.getItem('book_chapter_74921404') || 'Idea.vue',
    '74921405': localStorage.getItem('book_chapter_74921405') || 'Idea.vue',
    '74921406': localStorage.getItem('book_chapter_74921406') || 'Idea.vue',
    '74921407': localStorage.getItem('book_chapter_74921407') || 'Idea.vue',
    '74921408': localStorage.getItem('book_chapter_74921408') || 'Idea.vue',
    '74921409': localStorage.getItem('book_chapter_74921409') || 'Idea.vue',

    '47257390': localStorage.getItem('book_chapter_47257390') || 'Idea.vue',
    '47257391': localStorage.getItem('book_chapter_47257391') || 'Idea.vue',
    '47257392': localStorage.getItem('book_chapter_47257392') || 'Idea.vue',
    '47257393': localStorage.getItem('book_chapter_47257393') || 'Idea.vue',
    '47257394': localStorage.getItem('book_chapter_47257394') || 'Idea.vue',
    '47257395': localStorage.getItem('book_chapter_47257395') || 'Idea.vue',
    '47257396': localStorage.getItem('book_chapter_47257396') || 'Idea.vue',
    '47257397': localStorage.getItem('book_chapter_47257397') || 'Idea.vue',
    '47257398': localStorage.getItem('book_chapter_47257398') || 'Idea.vue',
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
