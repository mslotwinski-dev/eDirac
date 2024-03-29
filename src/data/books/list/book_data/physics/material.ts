import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

export const Physics_Material_1: Book = {
  ID: '85293781',

  Title: 'Fizyka Materiałów',
  Author: ['Mateusz Słotwiński'],

  Color: '#6D547C',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_material', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Wstęp do fizyki materiałów i inżynierii materiałowej',
    'fizyka, chemia i optyka ciała stałego',
  ],
}

export const Physics_Material_2: Book = {
  ID: '85293782',

  Title: 'Fizyka Półprzewodników',
  Author: ['Mateusz Słotwiński'],

  Color: '#6D547C',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_material', official: true, lang: ['pl'] },

  Part: 2,
  Subtitles: ['Fizyka półprzewodników i przyrządów elektronicznych'],
}

export const Physics_Material_3: Book = {
  ID: '85293784',

  Title: 'Nanostruktury',
  Author: ['Mateusz Słotwiński'],

  Color: '#6D547C',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_material', official: true, lang: ['pl'] },

  Part: 3,
  Subtitles: ['Nanostruktury, nanoinżynieria i nanotechnologie'],
}
