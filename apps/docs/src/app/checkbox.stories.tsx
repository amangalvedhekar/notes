import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@notes/components';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Atoms/Checkbox',
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'terms-web',
    labelText: 'Accept terms and conditions',
    size: '$4',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    labelText: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
    id: 'terms-web-checked',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'terms-web-disabled',
    labelText: 'Email me product updates',
  },
};
