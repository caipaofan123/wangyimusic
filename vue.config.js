const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true,
  devServer:{
    open: true,
    host: 'localhost',
  }
})
