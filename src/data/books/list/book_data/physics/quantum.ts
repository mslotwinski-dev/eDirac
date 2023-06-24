import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

import B_1 from '@/data/books/content/physics_quantum/73628461'
import B_2 from '@/data/books/content/physics_quantum/73628462'
import B_3 from '@/data/books/content/physics_quantum/73628463'

export const Physics_Quantum_1: Book = {
  ID: '73628461',

  Title: 'Fizyka i Inżynieria Kwantowa I',
  Author: ['Mateusz Słotwiński'],

  Color: '#3A5489',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_quantum', official: true, lang: ['pl'] },

  Part: 1,
  Subtitles: [
    'Zaawansowana mechanika kwantowa i kwantowa teoria pola',
    'elektrodynamika kwantowa, optyka kwantowa',
  ],
  Content: B_1,
}

export const Physics_Quantum_2: Book = {
  ID: '73628462',

  Title: 'Fizyka i Inżynieria Kwantowa II',
  Author: ['Mateusz Słotwiński'],

  Color: '#3A5489',

  Pages: 500,

  About: aboutplaceholder,
  Tag: {
    main: 'physics_quantum',
    official: true,
    lang: ['pl'],
  },

  Part: 2,
  Subtitles: [
    'Inżynieria kwantowa w praktyce: elektronika kwantowa',
    'kryptografia kwantowa, fizyka laserów',
  ],
  Content: B_2,
}

export const Physics_Quantum_3: Book = {
  ID: '73628463',

  Title: 'Informatyka Kwantowa',
  Author: ['Mateusz Słotwiński'],

  Color: '#3A5489',

  Pages: 500,

  About: aboutplaceholder,
  Tag: { main: 'physics_quantum', official: true, lang: ['pl'] },

  Part: 3,
  Subtitles: [
    'Informatyka kwantowa, ',
    'klasyczna i kwantowa teorii informacji',
  ],
  Content: B_3,
}
