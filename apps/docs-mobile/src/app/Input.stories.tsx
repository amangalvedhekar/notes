import type { Meta, StoryObj } from '@storybook/react-native';
import { Input } from '@notes/components';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Atoms/Input',
  args: {
    borderRadius: '$8',
    placeholder: 'test@example.com',
    size: '$4',
    width: 320,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Password: Story = {
  args: {
    placeholder: 'password',
    secureTextEntry: true,
  },
};

export const Invalid: Story = {
  args: {
    borderColor: 'red',
    placeholder: 'invalid email',
    value: 'not-an-email',
  },
};
