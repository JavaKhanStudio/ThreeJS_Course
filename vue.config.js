const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // Add rule for .glsl, .vs, .fs, .vert, and .frag files
    config.module
        .rule('glsl')
        .test(/\.(glsl|vs|fs|vert|frag)$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end();
  }
});
