import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

export const Informatics_1: Book = {
  ID: '74921402',

  Title: 'Programowanie I',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Programowanie strukturalne i obiektowe'],
}

export const Informatics_2: Book = {
  ID: '74921403',

  Title: 'Programowanie II',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'informatics',
    official: true,
    lang: ['pl'],
  },

  Part: 2,
  Subtitles: ['Programowanie aplikacji mobilnych i komputerowych'],
}

export const Informatics_3: Book = {
  ID: '74921406',

  Title: 'Modelowanie rzeczywistości',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },
  Subtitles: ['Bazy danych i data science'],

  Part: 3,
}

export const Informatics_4: Book = {
  ID: '74921407',

  Title: 'Uczenie maszynowe',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Subtitles: [
    'Wprowadzenie do sztucznej inteligencji',
    'oraz uczenia maszynowego',
  ],

  Part: 4,
}
