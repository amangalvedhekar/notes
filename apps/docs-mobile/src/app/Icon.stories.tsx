import type { Meta, StoryObj } from '@storybook/react-native';
import { Icon } from '@notes/components';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Atoms/Icon',
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
