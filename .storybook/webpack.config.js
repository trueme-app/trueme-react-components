const path = require('path')
const assetsPath = path.resolve(__dirname, '../assets/icons');

module.exports = ({ config }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = assetsPath;

  config.module.rules.push({
    test: /\.svg$/,
    include: assetsPath,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    }],
  }, {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.alias = {
    // adjust this path as needed depending on where your webpack config is
    'styled-components': path.resolve(__dirname, '../node_modules/styled-components')
  }

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
