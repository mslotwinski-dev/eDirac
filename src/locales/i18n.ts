import { createI18n } from 'vue-i18n'
import store from '@/store/index'

import en from './en'
import es from './es'
import pl from './pl'
import ua from './ua'

export default createI18n({
  legacy: false,
  locale: store.getters.getAppLanguage,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'pl',
  globalInjection: true,
  messages: {
    pl,
    en,
    es,
    ua,
  },
})
