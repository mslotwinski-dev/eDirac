import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/informatics/74921401'
import B_2 from '@/data/books/content/informatics/74921402'
import B_3 from '@/data/books/content/informatics/74921403'
import B_4 from '@/data/books/content/informatics/74921404'
import B_5 from '@/data/books/content/informatics/74921405'
import B_6 from '@/data/books/content/informatics/74921406'
import B_7 from '@/data/books/content/informatics/74921407'
import B_8 from '@/data/books/content/informatics/74921408'
import B_9 from '@/data/books/content/informatics/74921409'

export const Informatics_1: Book = {
  ID: '74921401',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: ['Architektura komputerów'],
  Content: B_1,
}

export const Informatics_2: Book = {
  ID: '74921402',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Algorytmy i struktury danych'],

  Content: B_2,
}

export const Informatics_3: Book = {
  ID: '74921403',

  Title: 'Informatyka',
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
  Subtitles: [
    'Podstawy informatyki i programowania,',
    'systemy operacyjne, systemy UNIX',
  ],

  Content: B_3,
}

export const Informatics_4: Book = {
  ID: '74921404',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: ['Programowanie I: programowanie strukturalne i obiektowe'],
  Content: B_4,
}

export const Informatics_5: Book = {
  ID: '74921405',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: [
    'Programowanie II: programowanie aplikacji',
    'mobilnych i komputerowych',
  ],
  Content: B_5,
}

export const Informatics_6: Book = {
  ID: '74921406',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: ['Sieci komupterowe i teleinformatyka'],
  Content: B_6,
}

export const Informatics_7: Book = {
  ID: '74921407',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: ['Bazy danych i data science'],
  Content: B_7,
}

export const Informatics_8: Book = {
  ID: '74921408',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 8,
  Subtitles: [
    'Programowanie III: programowanie stron',
    'internetowych i aplikacji sieciowych',
  ],
  Content: B_8,
}

export const Informatics_9: Book = {
  ID: '74921409',

  Title: 'Informatyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#3F647F',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'informatics', official: true, lang: ['pl'] },

  Part: 9,
  Subtitles: [
    'Wprowadzenie do sztucznej inteligencji',
    ' oraz uczenia maszynowego',
  ],

  Content: B_9,
}
