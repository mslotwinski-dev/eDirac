import { Category } from '../types/book'

// const _Economics = {} // import * as _Economics from './list/economics' /
// const _Biochemistry = {} // import * as _Biochemistry from './dummy/biochemistry'
// const _Astronomy = {} // import * as _Astronomy from './list/astronomy'
// const _Biology = {}
// const _Mechanics = {}

// import * as _Math from './list/math'
// export const Mathematics: Category = {
//   Title: 'mathematics',
//   Group: 0,
//   Books: Object.values({ ..._Math }),
// }

import * as _Physics from './list/physics'
export const Physics: Category = {
  Title: 'physics',
  Group: 0,
  Books: Object.values({ ..._Physics }),
}

import * as _Electronics from './list/electronics'
export const Electronics: Category = {
  Title: 'electronics',
  Group: 3,
  Books: Object.values({ ..._Electronics }),
}

// import * as _Informatics from './list/informatics'
// export const Informatics: Category = {
//   Title: 'informatics',
//   Group: 0,
//   Books: Object.values({ ..._Informatics }),
// }

// import * as _Biophysics from './list/biophysics'
// export const Biophysics: Category = {
//   Title: 'biophysics',
//   Group: 0,
//   Books: Object.values({ ..._Biophysics }),
// }

// import * as _Chemistry from './list/chemistry'
// export const Chemistry: Category = {
//   Title: 'chemistry',
//   Group: 0,
//   Books: Object.values({ ..._Chemistry }),
// }

// import * as _Mechatronics from './list/mechatronics'
// export const Mechatronics: Category = {
//   Title: 'mechatronics',
//   Group: 0,
//   Books: Object.values({ ..._Mechatronics }),
// }

// import * as _Telecommunications from './list/telecommunications'
// export const Telecommunications: Category = {
//   Title: 'telecommunications',
//   Group: 0,
//   Books: Object.values({ ..._Telecommunications }),
// }

// export const Mechanics: Category = {
//   Title: 'mechanics',
//   Group: 0,
//   Books: Object.values({ ..._Mechanics }),
// }

// export const Astronomy: Category = {
//   Title: 'astronomy',
//   Group: 0,
//   Books: Object.values({ ..._Astronomy }),
// }

// export const Biochemistry: Category = {
//   Title: 'biochemistry',
//   Group: 0,
//   Books: Object.values({ ..._Biochemistry }),
// }

// export const Biology: Category = {
//   Title: 'biology',
//   Group: 0,
//   Books: Object.values({ ..._Biology }),
// }

// export const Economics: Category = {
//   Title: 'economics',
//   Group: 0,
//   Books: Object.values({ ..._Economics }),
// }
