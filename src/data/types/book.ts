import { DefineComponent } from 'vue'

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
  CoverTitle?: string[]
  Author: string[]
  Color: string
  Icon: string
  BG: string
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

export type Subject = DefineComponent

export interface Subjects {
  [key: string]: DefineComponent
}

export interface Chapters {
  [key: string]: Subjects
}

export interface Parts {
  [key: string]: Chapters
}

export interface BookData {
  [key: string]: Parts
}

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
