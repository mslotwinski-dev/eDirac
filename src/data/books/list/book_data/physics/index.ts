import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/physics/16741766'
import B_2 from '@/data/books/content/physics/16741767'
import B_3 from '@/data/books/content/physics/16741768'
import B_4 from '@/data/books/content/physics/16741769'
import B_5 from '@/data/books/content/physics/16741770'
import B_6 from '@/data/books/content/physics/16741771'
import B_7 from '@/data/books/content/physics/16741772'
import B_8 from '@/data/books/content/physics/16741773'
import B_9 from '@/data/books/content/physics/16741774'

export const Physics_1: Book = {
  ID: '16741766',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
    'teoria grawitacji Newtona, szczególna teoria względności',
  ],

  Content: B_1,
}

export const Physics_2: Book = {
  ID: '16741767',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: [
    'Mechanika ośrodków ciągłych: podstawy hydrodynamiki,',
    'teoria sprężystości, drgania i fale mechaniczne, akustyka',
  ],
  Content: B_2,
}

export const Physics_3: Book = {
  ID: '16741768',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'physics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: [
    'Termodynamika i fizyka statystyczna, kinetyczna',
    'teoria gazów, elementy chemii fizycznej',
  ],
  Content: B_3,
}

export const Physics_4: Book = {
  ID: '16741769',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [
    'Elektrodynamika: pole elektryczne i magnetyczne, prąd',
    'elektryczny, elektromagnetyzm, elementy elektroniki',
  ],
  Content: B_4,
}

export const Physics_5: Book = {
  ID: '16741770',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: ['Fale elektromagnetyczne, optyka geometryczna i falowa'],
  Content: B_5,
}

export const Physics_6: Book = {
  ID: '16741771',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: [
    'Mechanika kwantowa, wstęp do kwantowej teorii pola ',
    'oraz fizyki współczesnej, optyka kwantowa, fotonika',
  ],
  Content: B_6,
}

export const Physics_7: Book = {
  ID: '16741772',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: [
    'Fizyka materii skondensowanej, podstawy fizyki',
    'półprzewodników, przewodnictwo i magnetyzm materii',
  ],
  Content: B_7,
}

export const Physics_8: Book = {
  ID: '16741773',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 8,
  Subtitles: ['Podstawy fizyki atomowej, jądrowej i cząstek elementarnych'],
  Content: B_8,
}

export const Physics_9: Book = {
  ID: '16741774',

  Title: 'Fizyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics',
  BG: 'physics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics', official: true, lang: ['pl'] },

  Part: 9,
  Subtitles: [
    'Astrofizyka i kosmologia: ogólna teoria względności,',
    'pole grawitacyjne, kwantowe zjawiska kosmologiczne',
  ],
  Content: B_9,
}
