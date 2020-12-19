const webpackConfig = require('../webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      ...webpackConfig.resolve,
      alias: {
        ...config.resolve.alias,
        ...webpackConfig.resolve.alias,
      },
    },
  }),
};
