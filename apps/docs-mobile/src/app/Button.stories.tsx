import type { Meta, StoryObj } from '@storybook/react-native';
import { Button, ThemeProvider } from '@notes/components';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    borderRadius: '$8',
    children: 'Register',
    isLoading: false,
    size: '$4',
    themeInverse: true,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

