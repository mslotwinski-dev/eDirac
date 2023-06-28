export interface Category {
  Title: string
  Group: number
  // Color: string
  // Author: string[]
  // Volumes: number
  Books: Book[]
}

export interface Book {
  ID: string
  Title: string
  Author: string[]
  Color: string
  Pages?: number
  About: string
  Tag: {
    main: string
    official: boolean
    lang: string[]
  }

  Part: number
  Subtitles: string[]
}

export interface BookData {
  [key: string]: {
    // Part
    [key: string]: {
      // Chapter
      [key: string]: string //Subjects
    }
  }
}

export type BookDB = {
  ID: string
  Content: BookData
}[]

// export type Data = {
//   TITLE: string
//   PART?: number
//   SUBTITLE?: string[]
//   AUTHOR: string[]
//   color: string
//   icon: string
//   pages: number
//   image: string
//   title_2: string
//   about: string
//   levels: string[][]
//   advanced?: boolean
// }
