import { Book } from '@/data/types/book'
import { aboutplaceholder } from '../../placeholders'

import B_1 from '../../content/16741766'

export const Physics_Relativity_1: Book = {
  ID: '16741766',

  Title: 'Fizyka Relatywistyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics_relativity',
  BG: 'physics_relativity',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_relativity', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
    'teoria grawitacji Newtona, szczególna teoria względności',
  ],

  Content: B_1,
}
