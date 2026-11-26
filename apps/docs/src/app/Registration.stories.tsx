import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthContext, Registration } from '@amangalvedhekar/components';

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
  tags: ['autodocs'],
  title: 'Templates/Registration',
  decorators: [
    (Story) => (
      <AuthContext.Provider value={mockAuthContextValue}>
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            height: 760,
            padding: 24,
            width: '100%',
          }}
        >
          <Story />
        </div>
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
