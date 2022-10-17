import { ProjectOptions } from '@vue/cli-service'
import * as path from 'path'

const vueConfig: ProjectOptions = {
  pwa: {
    name: 'eDirac',
    themeColor: '#00647D',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW',
  },

  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '>>': path.resolve(__dirname, 'public/'),
      },
    },
  },
  devServer: {
    port: 3105,
    host: '',
  },

  pluginOptions: {
    i18n: {
      locale: 'pl',
      fallbackLocale: 'pl',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
}

module.exports = vueConfig
