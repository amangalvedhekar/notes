import type { Meta, StoryObj } from '@storybook/react-vite';
import { LiveValidation } from '@notes/components';

const validationItems = [
  {
    isValid: true,
    key: 'length',
    message: 'Must be at least 8 characters long',
    testID: 'password-length',
  },
  {
    isValid: true,
    key: 'uppercase',
    message: 'Must contain one uppercase letter',
    testID: 'password-uppercase',
  },
  {
    isValid: false,
    key: 'number',
    message: 'Must contain one number',
    testID: 'password-number',
  },
  {
    isValid: false,
    key: 'special-character',
    message: 'Must contain one special character',
    testID: 'password-special-character',
  },
];

const meta: Meta<typeof LiveValidation> = {
  component: LiveValidation,
  tags: ['autodocs'],
  title: 'Templates/LiveValidation',
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    items: validationItems,
    showProgressBar: false,
    visible: true,
  },
  argTypes: {
    items: {
      control: 'object',
    },
    showProgressBar: {
      control: 'boolean',
    },
    visible: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithProgressBar: Story = {
  args: {
    showProgressBar: true,
  },
};

export const AllValid: Story = {
  args: {
    items: validationItems.map((item) => ({
      ...item,
      isValid: true,
    })),
    showProgressBar: true,
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
};
