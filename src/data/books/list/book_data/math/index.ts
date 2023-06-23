import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/mathematics/57046161'
import B_2 from '@/data/books/content/mathematics/57046162'
import B_3 from '@/data/books/content/mathematics/57046163'
import B_4 from '@/data/books/content/mathematics/57046164'
import B_5 from '@/data/books/content/mathematics/57046165'
import B_6 from '@/data/books/content/mathematics/57046166'
import B_7 from '@/data/books/content/mathematics/57046167'
import B_8 from '@/data/books/content/mathematics/57046168'

export const Mat_1: Book = {
  ID: '57046161',

  Title: 'Algebra I',
  CoverTitle: ['Matematyka', ''],
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: ['Wstęp do matematyki, logika, zbiory, algebra liniowa,'],
  Content: B_1,
}

export const Mat_2: Book = {
  ID: '57046162',

  Title: 'Algebra II',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Algebra abstrakcyjna: grupy, pierścienie i ciała'],
  Content: B_2,
}

export const Mat_3: Book = {
  ID: '57046163',

  Title: 'Analiza Rzeczywista I',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'mathematics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: [
    'Funkcje jednej zmiennej, granice, pochodne,',
    'szeregi liczbowe i funkcyjne, rachunek całkowy',
  ],
  Content: B_3,
}

export const Mat_4: Book = {
  ID: '57046164',

  Title: 'Analiza Rzeczywista II',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [
    'Funkcje wielu zmiennych, całki wielokrotne i formy różniczkowe',
    'równania różniczkowe zwyczajne i cząstkowe',
  ],

  Content: B_4,
}

export const Mat_5: Book = {
  ID: '57046165',

  Title: 'Analiza Zespolona',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: [''],
  Content: B_5,
}

export const Mat_6: Book = {
  ID: '57046166',

  Title: 'Metody Matematyczne Fizyki',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: [''],
  Content: B_6,
}

export const Mat_7: Book = {
  ID: '57046167',

  Title: 'Propablistyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: [''],
  Content: B_7,
}

export const Mat_8: Book = {
  ID: '57046168',

  Title: 'Metody numeryczne',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 8,
  Subtitles: [
    'Matematyka dyskretna: logika, teoria mnogości,',
    'teoria gier, kombinatoryka, relacje, rekurencje',
  ],
  Content: B_8,
}
