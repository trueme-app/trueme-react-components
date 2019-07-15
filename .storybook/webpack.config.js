const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
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
