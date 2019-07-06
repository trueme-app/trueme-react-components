const { jestPreset: tsJest } = require('ts-jest');

module.exports = {
  ...tsJest,
  globals: {
    "window": true,
    "ts-jest": {
      babelConfig: false,
    }
  }
};
