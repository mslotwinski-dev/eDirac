import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'langs' })
class LangsModule extends VuexModule {
  appLanguage =
    localStorage.getItem('eDirac_Language') ||
    process.env.VUE_APP_I18N_LOCALE ||
    'en'

  get getAppLanguage(): string {
    return this.appLanguage
  }

  @Mutation
  setAppLanguage(language: string): void {
    this.appLanguage = language
    localStorage.setItem('eDirac_Language', language)
  }
}

export default LangsModule
