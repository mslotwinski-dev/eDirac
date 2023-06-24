import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/mathematics/57046161'
import B_2 from '@/data/books/content/mathematics/57046161'

export const Mat_Comp_1: Book = {
  ID: '57046169',

  Title: 'Teoria Liczb',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics_computer', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: ['Teoria liczb'],
  Content: B_1,
}

export const Mat_Comp_2: Book = {
  ID: '57046170',

  Title: 'Matematyka Dyskretna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics_computer', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Matematyka dyskretna, kombinatoryka, relacje, rekurencje'],
  Content: B_2,
}

export const Mat_Comp_3: Book = {
  ID: '57046170',

  Title: 'Matematyka Obliczeniowa',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics_computer', official: true, lang: ['pl'] },

  Part: 3,
  Subtitles: [''],
  Content: B_2,
}

export const Mat_Comp_4: Book = {
  ID: '57046170',

  Title: 'Metody Optymalizacji',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics_computer', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [''],
  Content: B_2,
}

export const Mat_Comp_5: Book = {
  ID: '57046170',

  Title: 'Statystyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics_computer', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: [''],
  Content: B_2,
}
