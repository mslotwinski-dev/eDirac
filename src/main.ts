import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import i18n from './locales/i18n'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueDragScroll from 'vue-dragscroll'
import scrollsettings from './utilities/scroll'
import Notifications from '@kyvg/vue3-notification'

import FontAwesomeIcon from './utilities/FontsAwesome'

import './utilities/registerServiceWorker'

import 'katex/dist/katex.min.css'

import Article from '@/components/Book/Elements/Article.vue'
import Section from '@/components/Book/Elements/Section.vue'
import Begin from '@/components/Book/Elements/Begin.vue'
import Chapter from '@/components/Book/Elements/Chapter.vue'
import Image from '@/components/Book/Elements/Image.vue'
import Math from '@/components/Book/Elements/Math.vue'
import Code from '@/components/Book/Elements/Code.vue'
import Right from '@/components/Book/Elements/Right.vue'
import Center from '@/components/Book/Elements/Center.vue'
import Flex from '@/components/Book/Elements/Flex.vue'
import Nobel from '@/components/Book/Elements/Nobel.vue'
import M from '@/components/Book/Elements/M.vue'
import Example from '@/components/Book/Elements/Example.vue'
import Formula from '@/components/Book/Elements/Formula.vue'
import Cover from '@/components/Book/Elements/Cover.vue'
import Grid from '@/components/Book/Elements/Grid.vue'
import GridH from '@/components/Book/Elements/GridH.vue'
import Column from '@/components/Book/Elements/Column.vue'
import FunFact from '@/components/Book/Elements/FunFact.vue'
import Bio from '@/components/Book/Elements/Bio.vue'

createApp(App)
  .component('Article', Article)
  .component('Section', Section)
  .component('Begin', Begin)
  .component('Chapter', Chapter)
  .component('Image', Image)
  .component('Math', Math)
  .component('Code', Code)
  .component('Right', Right)
  .component('Center', Center)
  .component('Flex', Flex)
  .component('Nobel', Nobel)
  .component('M', M)
  .component('Example', Example)
  .component('Formula', Formula)
  .component('Cover', Cover)
  .component('Grid', Grid)
  .component('GridH', GridH)
  .component('Column', Column)
  .component('FunFact', FunFact)
  .component('Bio', Bio)

  .component('ic', FontAwesomeIcon)
  .use(i18n)
  .use(Notifications)
  .use(VueSmoothScroll, scrollsettings)
  .use(VueDragScroll)
  .use(store)
  .use(router)
  .mount('#app')
