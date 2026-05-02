import { view } from './storybook.requires';

const AsyncStorage = require('@react-native-async-storage/async-storage').default;

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
