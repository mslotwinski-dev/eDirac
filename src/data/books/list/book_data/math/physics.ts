import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/math_physics/64826482'
import B_2 from '@/data/books/content/math_physics/64826483'
import B_3 from '@/data/books/content/math_physics/64826484'
import B_4 from '@/data/books/content/math_physics/64826485'
import B_5 from '@/data/books/content/math_physics/64826486'
import B_6 from '@/data/books/content/math_physics/64826487'

export const Math_Physics_1: Book = {
  ID: '64826482',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 1,
  Subtitles: [
    'Zastosowania matematyki w mechanice teoretycznej',
    'i mechanice ośrodków ciągłych',
  ],
  Content: B_1,
}

export const Math_Physics_2: Book = {
  ID: '64826483',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 2,
  Subtitles: ['Zastosowania matematyki w elektrodynamice i teorii pola'],
  Content: B_2,
}
export const Math_Physics_3: Book = {
  ID: '64826484',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: ['Zastosowania matematyki w fizyce kwantowej i jądrowej'],
  Content: B_3,
}

export const Math_Physics_4: Book = {
  ID: '64826485',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 4,
  Subtitles: ['Zastosowania matematyki w fizyce statystycznej'],
  Content: B_4,
}

export const Math_Physics_5: Book = {
  ID: '64826486',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 5,
  Subtitles: ['Zastosowania matematyki w chemii, biochemii i biofizyce'],
  Content: B_5,
}

export const Math_Physics_6: Book = {
  ID: '64826487',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#008F7F',
  Icon: 'math_physics',
  BG: 'math_physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'math_physics',
    official: true,
    lang: ['pl'],
  },

  Part: 6,
  Subtitles: [
    'Zastosowania matematyki w technice, inżynierii,',
    'informatyce i elektronice',
  ],
  Content: B_6,
}
