import { aboutplaceholder } from '@/data/books/placeholders'
import { Book } from '@/data/types/book'

import B_1 from '@/data/books/content/biophysics/47257390'
import B_2 from '@/data/books/content/biophysics/47257391'
import B_3 from '@/data/books/content/biophysics/47257392'
import B_4 from '@/data/books/content/biophysics/47257393'
import B_5 from '@/data/books/content/biophysics/47257394'

export const Biophysics_1: Book = {
  ID: '47257390',

  Title: 'Biofizyka I',
  Author: ['Mateusz Słotwiński'],

  Color: '#2e7d32',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'biophysics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Podstawy teoretyczne biofizyki, wprowadzenie do zastosowań',
    'fizyki i metod fizycznych w biologii i medycynie',
  ],
  Content: B_1,
}

export const Biophysics_2: Book = {
  ID: '47257391',

  Title: 'Biofizyka II',
  Author: ['Mateusz Słotwiński'],

  Color: '#2e7d32',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'biophysics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: [
    'Biofizyka układów biologicznych, biofizyka molekularna,',
    'wpływ czynników fizycznych na organizm',
  ],
  Content: B_2,
}

export const Biophysics_3: Book = {
  ID: '47257392',

  Title: 'Fizyka Medyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#2e7d32',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'biophysics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: [
    'Fizyka medyczna, wprowadzenie do nauk medycznych,',
    'promieniowanie, ochrona radiologiczna i dozymetria',
  ],
  Content: B_3,
}

export const Biophysics_4: Book = {
  ID: '47257393',

  Title: 'inżynieria Biomedyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#2e7d32',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'biophysics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [
    'Elektronika biomedyczna, biomechanika,',
    'podstawy inżynierii biomedycznej',
  ],
  Content: B_4,
}

export const Biophysics_5: Book = {
  ID: '47257394',

  Title: 'Neurofizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#2e7d32',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'biophysics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: [
    'Neurofizyka, neuroinformatyka, neurobiologia,',
    'sztuczna inteligencja i sieci neuronowe',
  ],
  Content: B_5,
}

// export const Biophysics_6: Book = {
//   ID: '47257395',

//   Title: 'Biofizyka',
//   Author: ['Mateusz Słotwiński'],

//   Color: '#2e7d32',
//   Icon: 'biophysics',
//   BG: 'biophysics',
//   Pages: 500,

//   About: aboutplaceholder,
//   Tag: { main: 'biophysics', official: true, lang: ['pl'] },

//   Part: 6,
//   Subtitles: [
//     'Nanomateriały i nanotechnologie w medycynie, analiza',
//     'i przetwarzanie obrazu mikroskopowego,',
//   ],
//   Content: B_1,
// }
