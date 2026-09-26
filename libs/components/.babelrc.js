module.exports = function (api) {
  const isTest = api.env('test');

  return {
    presets: isTest
      ? [['module:@react-native/babel-preset', { useTransformReactJSX: true }]]
      : [
          [
            '@nx/react/babel',
            {
              runtime: 'automatic',
              useBuiltIns: 'usage',
            },
          ],
        ],
    plugins: [],
  };
};
