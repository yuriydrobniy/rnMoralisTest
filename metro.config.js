/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const node_libs = require('node-libs-react-native');

node_libs.crypto = `${__dirname}/crypto.js`;

module.exports = {
  resolver: {
    extraNodeModules: node_libs,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
