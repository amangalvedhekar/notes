import type { Meta, StoryObj } from '@storybook/react-native';
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
import { StyleSheet, Text, View } from 'react-native';
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
  <View style={styles.grid}>
    {icons.map(({ name, Component }) => (
      <View key={name} style={styles.item}>
        <Component color="#111827" height={32} stroke="#111827" width={32} />
        <Text style={styles.label}>{name}</Text>
      </View>
    ))}
  </View>
);

const meta: Meta<typeof IconsGallery> = {
  component: IconsGallery,
  title: 'Icons/All',
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {};

const styles = StyleSheet.create({
  grid: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
    minHeight: '100%',
    padding: 16,
  },
  item: {
    alignItems: 'center',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    minHeight: 96,
    padding: 16,
    width: 120,
  },
  label: {
    color: '#374151',
    fontSize: 12,
  },
});
