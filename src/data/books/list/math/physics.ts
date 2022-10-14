import { Book } from '@/data/types/book'
import { aboutplaceholder } from '../../placeholders'

import B_1 from '../../content/18851002'

export const Math_Physics_10: Book = {
  ID: '23006E89',

  Title: 'Fizyka Matematyczna',
  Author: ['Mateusz Słotwiński'],

  Color: '#DB9200',
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
  Subtitles: ['Podstawy zastosowań matematyki w fizyce'],
  Content: B_1,
}
