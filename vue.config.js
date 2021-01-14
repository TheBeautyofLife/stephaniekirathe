module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line quotes
        additionalData: `@import "@/sass/_variables.scss";`
      }
    }
  }
}
