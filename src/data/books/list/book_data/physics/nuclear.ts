import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/physics_nuclear/74829121'
import B_2 from '@/data/books/content/physics_nuclear/74829122'
import B_3 from '@/data/books/content/physics_nuclear/74829123'
import B_4 from '@/data/books/content/physics_nuclear/74829124'

export const Physics_Nuclear_1: Book = {
  ID: '74829121',

  Title: 'Fizyka i Technika Jądrowa I',
  Author: ['Mateusz Słotwiński'],

  Color: '#DB6A1A',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_nuclear', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Zaawansowana fizyka i chemia jądrowa,',
    'fizyka zderzeń jąder i cząstek elementarnych',
  ],

  Content: B_1,
}

export const Physics_Nuclear_2: Book = {
  ID: '74829123',

  Title: 'Fizyka i Technika Jądrowa II',
  Author: ['Mateusz Słotwiński'],

  Color: '#DB6A1A',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_nuclear', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Metody i techniki jądrowe, modelowanie procesów jądrowych'],
  Content: B_2,
}

export const Physics_Nuclear_3: Book = {
  ID: '74829124',

  Title: 'Energetyka Jądrowa',

  Author: ['Mateusz Słotwiński'],

  Color: '#DB6A1A',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'physics_nuclear',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: [
    'Fizyka reaktorów jądrowych, energetyka jądrowa',
    'i termojądrowa, nowe rozwiązania w energetyce',
  ],
  Content: B_3,
}

export const Physics_Nuclear_4: Book = {
  ID: '74829125',

  Title: 'Ochrona Radiologiczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#DB6A1A',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_nuclear', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [
    'Oddziaływanie promieniowania jonizującego z materią,',
    'dozymetria, ochrona radiologiczna i bezpieczeństwo jądrowe',
  ],

  Content: B_4,
}
