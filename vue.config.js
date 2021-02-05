module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./node_modules/base_mixins/_base_mixins.scss";',
      },
    },
  },
};
