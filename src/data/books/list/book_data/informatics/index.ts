import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/informatics/74921401'
import B_2 from '@/data/books/content/informatics/74921402'
import B_3 from '@/data/books/content/informatics/74921403'
import B_4 from '@/data/books/content/informatics/74921404'
import B_5 from '@/data/books/content/informatics/74921405'
import B_6 from '@/data/books/content/informatics/74921406'
import B_7 from '@/data/books/content/informatics/74921407'

export const Informatics_1: Book = {
  ID: '74921401',

  Title: 'Algorytmy i Struktury Danych',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [''],
  Content: B_1,
}

export const Informatics_2: Book = {
  ID: '74921402',

  Title: 'Programowanie I',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Programowanie strukturalne i obiektowe'],

  Content: B_2,
}

export const Informatics_3: Book = {
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

  Part: 3,
  Subtitles: ['Programowanie aplikacji mobilnych i komputerowych'],

  Content: B_3,
}

export const Informatics_4: Book = {
  ID: '74921404',

  Title: 'Programowanie III',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: ['Programowanie stron internetowych i aplikacji sieciowych', ''],
  Content: B_4,
}

export const Informatics_5: Book = {
  ID: '74921405',

  Title: 'Teleinformatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: ['Sieci komupterowe i teleinformatyka'],

  Content: B_5,
}

export const Informatics_6: Book = {
  ID: '74921406',

  Title: 'Bazy Danych',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },
  Subtitles: ['Bazy danych i data science'],

  Part: 6,
  Content: B_6,
}

export const Informatics_7: Book = {
  ID: '74921407',

  Title: 'Sztuczna Inteligencja',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Subtitles: [
    'Wprowadzenie do sztucznej inteligencji',
    ' oraz uczenia maszynowego',
  ],

  Part: 7,
  Content: B_7,
}
