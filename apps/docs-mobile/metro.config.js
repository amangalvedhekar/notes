const path = require('path');
const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  cacheVersion: "@notes/docs-mobile",
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
    extraNodeModules: new Proxy(
      {},
      {
        get: (_target, name) =>
          path.join(__dirname, `../../node_modules/${String(name)}`),
      }
    ),
  },
};

module.exports = (async () => {
  const nxConfig = await withNxMetro(mergeConfig(defaultConfig, customConfig), {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
    extensions: [],
    // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
    watchFolders: [],
  });

  return withStorybook(nxConfig, {
    configPath: path.resolve(__dirname, './.rnstorybook'),
  });
})();
