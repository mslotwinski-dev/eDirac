import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/mathematics/57046161'
import B_2 from '@/data/books/content/mathematics/57046161'

export const Mat_Comp_1: Book = {
  ID: '57046169',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 9,
  Subtitles: [', statystyka i analiza danych'],
  Content: B_1,
}

export const Mat_Comp_2: Book = {
  ID: '57046170',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 10,
  Subtitles: [],
  Content: B_2,
}
