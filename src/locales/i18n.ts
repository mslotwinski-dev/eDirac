import { createI18n } from 'vue-i18n'
import store from '@/store/index'

// import en from './en'
import pl from './pl'

export default createI18n({
  legacy: false,
  locale: store.getters.getAppLanguage,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages: {
    en: pl,
    es: pl,
    pl,
  },
})
