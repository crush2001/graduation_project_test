const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { TDesignResolver } = require('unplugin-vue-components/resolvers');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: config => {
    config.plugins.push(
      AutoImport({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
    )
    config.plugins.push(
      Components({
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
      }),
    )
  }
})
