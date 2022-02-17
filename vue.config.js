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
  }
};