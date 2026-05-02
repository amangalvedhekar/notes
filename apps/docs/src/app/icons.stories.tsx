import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Check,
  Cross,
  Exclamation,
  Hide,
  Lock,
  Profile,
  Show,
  ThemeProvider,
  Unlock,
} from '@notes/components';
import type { SvgProps } from 'react-native-svg';

const icons: Array<{ name: string; Component: (props: SvgProps) => React.JSX.Element }> = [
  { name: 'Check', Component: Check },
  { name: 'Cross', Component: Cross },
  { name: 'Exclamation', Component: Exclamation },
  { name: 'Hide', Component: Hide },
  { name: 'Lock', Component: Lock },
  { name: 'Profile', Component: Profile },
  { name: 'Show', Component: Show },
  { name: 'Unlock', Component: Unlock },
];

const IconsGallery = () => (
  <div
    style={{
      display: 'grid',
      gap: 16,
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      maxWidth: 720,
    }}
  >
    {icons.map(({ name, Component }) => (
      <div
        key={name}
        style={{
          alignItems: 'center',
          border: '1px solid #d1d5db',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          minHeight: 96,
          padding: 16,
        }}
      >
        <Component color="#111827" height={32} stroke="#111827" width={32} />
        <span style={{ color: '#374151', fontFamily: 'sans-serif', fontSize: 12 }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

const meta: Meta<typeof IconsGallery> = {
  component: IconsGallery,
  tags: ['autodocs'],
  title: 'Icons/All',
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {};
