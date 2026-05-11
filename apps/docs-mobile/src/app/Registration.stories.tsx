import type { Meta, StoryObj } from '@storybook/react-native';
import { AuthContext, Registration } from '@notes/components';
import { View } from 'react-native';

const mockAuthContextValue = {
  register: async () => {},
  confirmUser: async () => {},
};

const meta: Meta<typeof Registration> = {
  component: Registration,
  title: 'Templates/Registration',
  decorators: [
    (Story) => (
      <AuthContext.Provider value={mockAuthContextValue}>
        <View style={{ minHeight: 760, paddingHorizontal: 12 }}>
          <Story />
        </View>
      </AuthContext.Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
