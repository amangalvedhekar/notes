import type { Meta, StoryObj } from '@storybook/react-native';
import { Registration } from '@notes/components';
import { View } from 'react-native';

const meta: Meta<typeof Registration> = {
  component: Registration,
  title: 'Templates/Registration',
  decorators: [
    (Story) => (
      <View style={{ minHeight: 760, paddingHorizontal: 12 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
