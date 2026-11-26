import type { Meta, StoryObj } from '@storybook/react-native';
import { AuthContext, Registration } from '@amangalvedhekar/components';
import { View } from 'react-native';

const mockAuthContextValue = {
  register: async () => undefined as never,
  confirmUser: async () => undefined as never,
  completeAutoSignIn: async () => undefined as never,
  isAuthLoading: false,
  isSignedIn: false,
  username: null,
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

export const Default: Story = {
  args: {
    heading: 'Registration',
    subheading: 'Create an account',
  },
};
