module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module
      .rule('graphql')
      .test(/\.gql$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
  },
};