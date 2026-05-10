import type { Meta, StoryObj } from '@storybook/react-native';
import { FeedbackMessage } from '@notes/components';

const meta: Meta<typeof FeedbackMessage> = {
  component: FeedbackMessage,
  title: 'Molecules/FeedbackMessage',
  args: {
    message: 'Must be at least 8 characters long',
    testID: 'feedback-message',
    type: 'success',
  },
  argTypes: {
    message: {
      control: 'text',
    },
    type: {
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
    message: 'Password strength is almost there',
    type: 'warning',
  },
};

export const Error: Story = {
  args: {
    message: 'Must contain one special character',
    type: 'error',
  },
};
