import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'langs' })
class LangsModule extends VuexModule {
  appLanguage =
    localStorage.getItem('UniverseLanguage') ||
    process.env.VUE_APP_I18N_LOCALE ||
    'en'

  get getAppLanguage(): string {
    return this.appLanguage
  }

  @Mutation
  setAppLanguage(language: string): void {
    this.appLanguage = language
    localStorage.setItem('UniverseLanguage', language)
  }
}

export default LangsModule
