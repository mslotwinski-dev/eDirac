import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// import i18n from './locales/i18n'
import VueSmoothScroll from 'vue3-smooth-scroll'
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

createApp(App)
  .component('Article', Article)
  .component('Section', Section)
  .component('Begin', Begin)
  .component('Chapter', Chapter)
  .component('Image', Image)
  .component('Math', Math)
  .component('Code', Code)

  .component('ic', FontAwesomeIcon)
  // .use(i18n)
  .use(Notifications)
  .use(VueSmoothScroll, scrollsettings)
  .use(store)
  .use(router)
  .mount('#app')
