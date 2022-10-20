import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({ name: 'Privacy' })
class PrivacyModule extends VuexModule {
  Accepted = localStorage.getItem(`privacy_accepted`) == 'true' ? true : false

  get IsPrivacyAccepted(): boolean {
    return this.Accepted
  }

  @Mutation
  AcceptPrivacy(): void {
    this.Accepted = true
    localStorage.setItem('privacy_accepted', 'true')
  }
}

export default PrivacyModule
