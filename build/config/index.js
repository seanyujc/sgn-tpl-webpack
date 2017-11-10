const path = require('path')
var NODE_ENV = process.env.NODE_ENV || 'DEV'

const htmlWebpackPluginOption = {
  filename: 'index.html',
  template: path.join(__dirname, '../../src', 'index-tpl.html'),
  basePath: '',
  dlls: ['dll/angular-dll', 'dll/plugins-dll'],
  styles: ['styles/bootstrap'],
  siteInfo: {
    DEV: { local: "localhost:8002", remote: "172.16.106.110:8080" },
    TEST: { local: "bsm.haveoo.com", remote: "bsm.haveoo.com" },
    UAT: { local: "bsm-uat.lincomb.com", remote: "bsm-uat.lincomb.com" },
    PRO: { local: "bsm.lincomb.com", remote: "bsm.lincomb.com" },
  }
}

const build = {
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'static',
  assetsPublicPath: '/bsm/',
  productionSourceMap: true,
  htmlWebpackPluginOption,
  siteInfo: htmlWebpackPluginOption.siteInfo
}

const dev = {
  port: 8000,
  autoOpenBrowser: true,
  assetsSubDirectory: '',
  assetsPublicPath: '/',
  cssSourceMap: false,
  htmlWebpackPluginOption
}

build.htmlWebpackPluginOption.basePath = build.assetsPublicPath;
build.htmlWebpackPluginOption.NODE_ENV = NODE_ENV;
dev.htmlWebpackPluginOption.basePath = dev.assetsPublicPath;
dev.htmlWebpackPluginOption.NODE_ENV = NODE_ENV;

module.exports = {
  build,
  dev
}
