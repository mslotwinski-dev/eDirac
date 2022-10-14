import { Category } from '../types/book'
import * as _Math from './list/math'
import * as _Physics from './list/physics'
import * as _Electronics from './list/electronics'
import * as _Informatics from './list/informatics'
// import * as _Mechatronics from './list/mechatronics'
// import * as _Economics from './list/economics'
// import * as _Chemistry from './dummy/chemistry'
// import * as _Biochemistry from './dummy/biochemistry'
import * as _Biophysics from './list/biophysics'
// import * as _Telecommunications from './list/telecommunications'
// import * as _Astronomy from './list/astronomy'

export const Mathematics: Category = {
  Title: 'mathematics',
  Group: 0,
  Books: Object.values({ ..._Math }),
}

export const Physics: Category = {
  Title: 'physics',
  Group: 0,
  Books: Object.values({ ..._Physics }),
}

export const Electronics: Category = {
  Title: 'electronics',
  Group: 3,
  Books: Object.values({ ..._Electronics }),
}

export const Informatics: Category = {
  Title: 'informatics',
  Group: 0,
  Books: Object.values({ ..._Informatics }),
}

// export const Mechatronics: Category = {
//   Title: 'mechatronics',
//   Group: 0,
//   Books: Object.values({ ..._Mechatronics }),
// }

// export const Economics: Category = {
//   Title: 'economics',
//   Group: 0,
//   Books: Object.values({ ..._Economics }),
// }

// export const Chemistry: Category = {
//   Title: 'chemistry',
//   Group: 0,
//   Books: Object.values({ ..._Chemistry }),
// }

// export const Biochemistry: Category = {
//   Title: 'biochemistry',
//   Group: 0,
//   Books: Object.values({ ..._Biochemistry }),
// }

export const Biophysics: Category = {
  Title: 'biophysics',
  Group: 0,
  Books: Object.values({ ..._Biophysics }),
}

// export const Telecommunications: Category = {
//   Title: 'telecommunications',
//   Group: 0,
//   Books: Object.values({ ..._Telecommunications }),
// }

// export const Astronomy: Category = {
//   Title: 'astronomy',
//   Group: 0,
//   Books: Object.values({ ..._Astronomy }),
// }
