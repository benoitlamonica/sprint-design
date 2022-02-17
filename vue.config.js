module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/css/main.css";
        `
      }
    }
  }
};