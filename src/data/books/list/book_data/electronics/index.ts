import { aboutplaceholder } from '@/data/books/placeholders'
import { Book } from '@/data/types/book'

import B_1 from '@/data/books/content/electronics/18851002'
import B_2 from '@/data/books/content/electronics/18851003'
import B_3 from '@/data/books/content/electronics/18851004'
import B_4 from '@/data/books/content/electronics/18851005'
import B_5 from '@/data/books/content/electronics/18851006'
import B_6 from '@/data/books/content/electronics/18851007'
import B_7 from '@/data/books/content/electronics/18851008'

export const Electronics_1: Book = {
  ID: '18851002',

  Title: 'Elektronika I',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Wstęp do elektroniki i elektrotechniki, półprzewodniki,',
    'fizyczne podstawy elektroniki, teoria obwodów elektrycznych',
  ],

  Content: B_1,
}

export const Electronics_2: Book = {
  ID: '18851003',

  Title: 'Elektronika II',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: [
    'Elementy i układy elektroniczne, ',
    'teoria i przetwarzanie sygnałów',
  ],
  Content: B_2,
}

export const Electronics_3: Book = {
  ID: '18851004',

  Title: 'Elektronika III',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'electronics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: [
    'Elektronika cyfrowa, systemy cyfrowe',
    'i komputerowe, wstęp do inżynierii komputerowej',
  ],
  Content: B_3,
}

export const Electronics_4: Book = {
  ID: '18851005',

  Title: 'Optoelektronika',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: ['Elementy optoelektroniczne, fotonika, fotowoltaika'],
  Content: B_4,
}

export const Electronics_5: Book = {
  ID: '18851006',

  Title: 'Podstawy Mikroelektroniki',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: ['Nowoczesna mikroelektronika, układy scalone'],
  Content: B_5,
}

export const Electronics_6: Book = {
  ID: '18851007',

  Title: 'Inżynieria Komputerowa',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: [
    'Podstawy mikrokontrolerów i mikrosystemów ',
    'oraz systemów wbudowanych, nowoczesna elektronika',
  ],
  Content: B_6,
}

export const Electronics_7: Book = {
  ID: '18851008',

  Title: 'Metrologia',
  Author: ['Mateusz Słotwiński'],

  Color: '#aa2222',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'electronics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: ['Podstawy metrologii i automatyzacji pomiarów'],
  Content: B_7,
}
