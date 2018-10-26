const path = require('path')

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'src/renderer/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background/main.js',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/renderer'),
      },
    },
  },
}
