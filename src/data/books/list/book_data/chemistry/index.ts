import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

export const Chemistry_1: Book = {
  ID: '31350601',

  Title: 'Chemia I',
  Author: ['Mateusz Słotwiński'],

  Color: '#c6b755ff',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'chemistry', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: ['', ''],
}

export const Chemistry_2: Book = {
  ID: '31350602',

  Title: 'Chemia II',
  Author: ['Mateusz Słotwiński'],

  Color: '#c6b755ff',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'chemistry', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['', ''],
}
