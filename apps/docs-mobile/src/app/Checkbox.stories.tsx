import type { Meta, StoryObj } from '@storybook/react-native';
import { Checkbox } from '@notes/components';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Atoms/Checkbox',
  args: {
    id: 'terms-native',
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
    id: 'terms-native-checked',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'terms-native-disabled',
    labelText: 'Email me product updates',
  },
};
