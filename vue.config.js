module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/css/main.css";
        `
      }
    }
  },
  pwa: {
    name: 'BetClick',
    themeColor: '#d1161e',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
};
