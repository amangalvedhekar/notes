import { Image } from 'react-native';
import { view } from './storybook.requires';

const AsyncStorage = require('@react-native-async-storage/async-storage').default;

const StorybookUIRoot = view.getStorybookUI({
  initialSelection: {
    kind: 'Getting Started/Overview',
    name: 'Main',
  },
  shouldPersistSelection: false,
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  theme: {
    brand: {
      image: (
        <Image
          source={require('../public/storybook-icon.png')}
          style={{ width: 18, height: 18 }}
          resizeMode="contain"
        />
      ),
    },
  },
});

export default StorybookUIRoot;
