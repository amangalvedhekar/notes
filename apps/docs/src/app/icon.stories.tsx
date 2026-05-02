import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, ThemeProvider } from '@notes/components';

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  title: 'Atoms/Icon',
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div style={{ alignItems: 'center', display: 'flex', gap: 16, padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  args: {
    height: 32,
    name: 'success',
    width: 32,
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['success', 'warning', 'error'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {};

export const Warning: Story = {
  args: {
    name: 'warning',
  },
};

export const Error: Story = {
  args: {
    name: 'error',
  },
};
