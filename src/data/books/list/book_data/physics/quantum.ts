import { Book } from '@/data/types/book'
import { aboutplaceholder } from '@/data/books/placeholders'

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
    'Informatyka kwantowa, klasyczna i kwantowa',
    'teorii informacji',
  ],
}
