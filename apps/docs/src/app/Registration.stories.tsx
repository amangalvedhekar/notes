import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthContext, Registration } from '@notes/components';

const mockAuthContextValue = {
  register: async () => {},
  confirmUser: async () => {},
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
            margin: '0 auto',
            maxWidth: 460,
            minHeight: 760,
            padding: 24,
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

export const Default: Story = {};
