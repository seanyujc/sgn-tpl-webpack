const path = require('path')

const htmlWebpackPluginOption = {
  filename: 'index.html',
  template: path.join(__dirname, '../../src', 'index-tpl.html'),
  basePath: '',
  dlls: ['dll/angular-dll', 'dll/plugins-dll'],
  styles: ['styles/bootstrap']
}

const build = {
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/bsm/',
  productionSourceMap: true,
  htmlWebpackPluginOption
}

const dev = {
  port: 8002,
  autoOpenBrowser: true,
  assetsSubDirectory: '',
  assetsPublicPath: '/',
  cssSourceMap: false,
  htmlWebpackPluginOption
}

build.htmlWebpackPluginOption.basePath = build.assetsPublicPath;
dev.htmlWebpackPluginOption.basePath = dev.assetsPublicPath;

module.exports = {
  build,
  dev
}
