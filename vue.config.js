module.exports = {
  devServer: {
    port: 8084,
  },
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map',
    plugins: [],
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeDoctype: true },
            { removeComments: true },
            { cleanupIDs: false },
            { collapseGroups: false },
            { removeEmptyContainers: false },
          ],
        },
      });
  },
};
