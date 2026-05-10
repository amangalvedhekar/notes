import type { Meta, StoryObj } from '@storybook/react-vite';
import { Registration } from '@notes/components';

const meta: Meta<typeof Registration> = {
  component: Registration,
  tags: ['autodocs'],
  title: 'Templates/Registration',
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0 auto',
          maxWidth: 460,
          minHeight: 760,
          padding: 24,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
