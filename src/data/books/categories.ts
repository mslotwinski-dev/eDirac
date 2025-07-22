import { Category } from '../types/book'

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

// import * as _Space_Technologies from './list/space'
// export const Space_Technologies: Category = {
//   Title: 'space_technologies',
//   Group: 0,
//   Books: Object.values({ ..._Space_Technologies }),
// }

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
