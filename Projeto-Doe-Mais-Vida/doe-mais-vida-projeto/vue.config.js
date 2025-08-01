const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
	devServer: {
    port: 8080 // Altere para a porta desejada, por exemplo, 8080
  }
})
