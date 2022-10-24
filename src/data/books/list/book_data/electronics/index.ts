import { aboutplaceholder } from '@/data/books/placeholders'
import { Book } from '@/data/types/book'

import B_1 from '@/data/books/content/electronics/18851002'
import B_2 from '@/data/books/content/electronics/18851003'
import B_3 from '@/data/books/content/electronics/18851004'
import B_4 from '@/data/books/content/electronics/18851005'
import B_5 from '@/data/books/content/electronics/18851006'
import B_6 from '@/data/books/content/electronics/18851007'
import B_7 from '@/data/books/content/electronics/18851008'
import B_8 from '@/data/books/content/electronics/18851009'
import B_9 from '@/data/books/content/electronics/18851010'

export const Electronics_1: Book = {
  ID: '18851002',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Wstęp do elektroniki i elektrotechniki,',
    'materiały w elektronice',
  ],

  Content: B_1,
}

export const Electronics_2: Book = {
  ID: '18851003',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Fizyczne podstawy elektroniki'],
  Content: B_2,
}

export const Electronics_3: Book = {
  ID: '18851004',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'electronics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: ['Podstawy metrologii i automatyzacji pomiarów'],
  Content: B_3,
}

export const Electronics_4: Book = {
  ID: '18851005',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: ['Teoria obwodów elektrycznych'],
  Content: B_4,
}

export const Electronics_5: Book = {
  ID: '18851006',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: ['Elementy i układy elektroniczne'],
  Content: B_5,
}

export const Electronics_6: Book = {
  ID: '18851007',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: ['Teoria i przetwarzanie sygnałów'],
  Content: B_6,
}

export const Electronics_7: Book = {
  ID: '18851008',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: [
    'Optoelektronika: technologie elektroniczne',
    'i fotoniczne, fotonika światłowodowa',
  ],
  Content: B_7,
}

export const Electronics_8: Book = {
  ID: '18851009',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 8,
  Subtitles: [
    'Elektronika cyfrowa, systemy cyfrowe',
    'i komputerowe, wstęp do inżynierii komputerowej',
  ],
  Content: B_8,
}

export const Electronics_9: Book = {
  ID: '18851010',

  Title: 'Elektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',
  Icon: 'electronics',
  BG: 'electronics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 9,
  Subtitles: [
    'Podstawy mikroelektroniki, mikrokontrolerów i mikrosystemów ',
    'oraz systemów wbudowanych, nowoczesna elektronika',
  ],
  Content: B_9,
}
