import type { Meta, StoryObj } from '@storybook/react-native';
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

const allValidItems = validationItems.map((item) => ({
  ...item,
  isValid: true,
}));

const renderLiveValidation = ({
  items,
  showProgressBar,
  visible,
}: {
  items: typeof validationItems;
  showProgressBar: boolean;
  visible: boolean;
}) => (

    <LiveValidation items={items} showProgressBar={showProgressBar} visible={visible} />

);

const meta: Meta<typeof LiveValidation> = {
  component: LiveValidation,
  title: 'Templates/LiveValidation',
  parameters: {
    controls: {
      exclude: ['items'],
    },
  },
  args: {
    showProgressBar: false,
    visible: true,
  },
  argTypes: {
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

export const Default: Story = {
  render: (args) =>
    renderLiveValidation({
      items: validationItems,
      showProgressBar: args.showProgressBar ?? false,
      visible: args.visible ?? true,
    }),
};

export const WithProgressBar: Story = {
  args: {
    showProgressBar: true,
  },
  render: (args) =>
    renderLiveValidation({
      items: validationItems,
      showProgressBar: args.showProgressBar ?? true,
      visible: args.visible ?? true,
    }),
};

export const AllValid: Story = {
  args: {
    showProgressBar: true,
  },
  render: (args) =>
    renderLiveValidation({
      items: allValidItems,
      showProgressBar: args.showProgressBar ?? true,
      visible: args.visible ?? true,
    }),
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
  render: (args) =>
    renderLiveValidation({
      items: validationItems,
      showProgressBar: args.showProgressBar ?? false,
      visible: args.visible ?? false,
    }),
};
