import { Book } from '@/data/types/book'
import { aboutplaceholder } from '../../placeholders'

import B_1 from '../../content/16741766'

export const Physics_Mechanics_1: Book = {
  ID: '16741766',

  Title: 'Mechanika Techniczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#006E89',
  Icon: 'physics_mechanics',
  BG: 'physics_mechanics',
  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_mechanics', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Mechanika: ruch postępowy i obrotowy, siły i równowaga,',
    'teoria grawitacji Newtona, szczególna teoria względności',
  ],

  Content: B_1,
}
