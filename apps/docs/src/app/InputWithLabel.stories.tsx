import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hide, InputWithLabel, Lock, Profile } from '@notes/components';

const meta: Meta<typeof InputWithLabel> = {
  component: InputWithLabel,
  tags: ['autodocs'],
  title: 'Molecules/InputWithLabel',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 360, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'email',
    labelText: 'Email',
    leftIcon: <Profile />,
    placeholder: 'test@example.com',
    size: '$4',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    errorMessage: {
      control: 'text',
    },
    isInvalid: {
      control: 'boolean',
    },
    labelText: {
      control: 'text',
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
    id: 'password',
    labelText: 'Password',
    leftIcon: <Lock />,
    placeholder: 'password',
    rightIcon: <Hide />,
    secureTextEntry: true,
  },
};

export const Invalid: Story = {
  args: {
    errorMessage: 'Enter a valid email address',
    isInvalid: true,
    placeholder: 'invalid email',
    value: 'not-an-email',
  },
};
