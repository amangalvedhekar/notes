import type { Meta, StoryObj } from '@storybook/react-native';
import {
  OneTimePassword,
  type OneTimePasswordProps,
} from '@amangalvedhekar/components';
import { useEffect, useState } from 'react';

const ControlledOneTimePassword = (args: OneTimePasswordProps) => {
  const [value, setValue] = useState(args.value);

  useEffect(() => setValue(args.value), [args.value]);

  return (
    <OneTimePassword
      {...args}
      value={value}
      onChangeText={(nextValue) => {
        setValue(nextValue);
        args.onChangeText(nextValue);
      }}
    />
  );
};

const meta: Meta<typeof OneTimePassword> = {
  component: OneTimePassword,
  title: 'Molecules/OneTimePassword',
  args: {
    autoFocus: false,
    helperText: 'Enter the 6-digit code sent to you',
    label: 'Enter verification code',
    length: 6,
    onChangeText: () => undefined,
    onSubmit: () => undefined,
    secureTextEntry: false,
    submitLabel: 'Verify',
    value: '',
  },
  argTypes: {
    errorMessage: { control: 'text' },
    helperText: { control: 'text' },
    label: { control: 'text' },
    length: { control: { min: 1, type: 'number' } },
    submitLabel: { control: 'text' },
    value: { control: 'text' },
  },
  render: (args) => <ControlledOneTimePassword {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    errorMessage: 'The verification code is invalid',
    value: '123456',
  },
};

export const FourDigitCode: Story = {
  args: {
    helperText: 'Enter your 4-digit recovery code',
    length: 4,
    value: '12',
  },
};
