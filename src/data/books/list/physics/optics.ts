import { Book } from '@/data/types/book'
import { aboutplaceholder } from '../../placeholders'

import B_1 from '../../content/16741766'

export const Physics_Optics_1: Book = {
  ID: '16741766',

  Title: 'Optyka i Fotonika',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics_optics',
  BG: 'physics_optics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_optics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
    'teoria grawitacji Newtona, szczególna teoria względności',
  ],

  Content: B_1,
}
