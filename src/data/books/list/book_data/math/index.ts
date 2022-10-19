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
import B_9 from '@/data/books/content/mathematics/57046169'
import B_10 from '@/data/books/content/mathematics/57046170'

export const Mat_1: Book = {
  ID: '57046161',

  Title: 'Matematyka',
  CoverTitle: ['Matematyka', ''],
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Wstęp do matematyki, algebra liniowa: wielomiany,',
    'macierze, wyznaczniki, przestzenie, rachunek wektorowy',
  ],
  Content: B_1,
}

export const Mat_2: Book = {
  ID: '57046162',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Algebra abstrakcyjna: grupy, pierścienie i ciała'],
  Content: B_2,
}

export const Mat_3: Book = {
  ID: '57046163',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'mathematics',
    official: true,
    lang: ['pl'],
  },

  Part: 3,
  Subtitles: ['Geometria ogólna i analityczna oraz topologia'],
  Content: B_3,
}

export const Mat_4: Book = {
  ID: '57046164',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 4,
  Subtitles: [
    'Analiza matematyczna I: funkcje jednej zmiennej, granice,',
    'pochodne, szeregi liczbowe i funkcyjne, rachunek całkowy',
  ],
  Content: B_4,
}

export const Mat_5: Book = {
  ID: '57046165',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 5,
  Subtitles: [
    'Analiza matematyczna II: funkcje wielu zmiennych, miara',
    `i całka Lebesgue'a, całki wielokrotne i formy różniczkowe`,
  ],
  Content: B_5,
}

export const Mat_6: Book = {
  ID: '57046166',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 6,
  Subtitles: [
    'Równania różniczkowe zwyczajne i cząstkowe,',
    'wstęp do rachunku wariacyjnego',
  ],
  Content: B_6,
}

export const Mat_7: Book = {
  ID: '57046167',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 7,
  Subtitles: [
    'Funkcje analityczne, analiza zespolona i funkcjonalna,',
    'układy dynamiczne i geometria różniczkowa',
  ],
  Content: B_7,
}

export const Mat_8: Book = {
  ID: '57046168',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
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

export const Mat_9: Book = {
  ID: '57046169',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 9,
  Subtitles: ['Propablistyka, statystyka i analiza danych'],
  Content: B_9,
}

export const Mat_10: Book = {
  ID: '57046170',

  Title: 'Matematyka',
  Author: ['Mateusz Słotwiński'],

  Color: '#CC8400',
  Icon: 'mathematics',
  BG: 'mathematics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'mathematics', official: true, lang: ['pl'] },

  Part: 10,
  Subtitles: [
    'Metody numeryczne i zastosowania matematyki w innych',
    'naukach przyrodniczych, technicznych oraz społecznych',
  ],
  Content: B_10,
}
