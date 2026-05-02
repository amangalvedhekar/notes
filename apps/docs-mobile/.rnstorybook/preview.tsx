import { View } from 'react-native';
import type { Preview } from '@storybook/react-native';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

const preview: Preview = {
  decorators: [
    withBackgrounds,
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    backgrounds: {
      default: 'night',
      values: [
        { name: 'night', value: '#0b1220' },
        { name: 'paper', value: '#f8f6ef' },
        { name: 'mint', value: '#d1fae5' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
