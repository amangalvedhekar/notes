/// <reference types="@storybook/react-native/metro-env" />

import type { Meta, StoryObj } from '@storybook/react-native';
import type { ComponentType } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

type IconComponent = ComponentType<SvgProps>;
type IconModule = Record<string, unknown>;
type IconName = keyof typeof iconComponents;
type IconStoryArgs = {
  color?: string;
  height: number;
  icon: IconName;
  width: number;
};
type IconRequireContext = {
  keys: () => string[];
  (id: string): IconModule;
};

const iconContext = require.context(
  '../../../../libs/components/src/lib/components/icons',
  false,
  /\.tsx$/
) as IconRequireContext;

const isIconComponent = (entry: [string, unknown]): entry is [string, IconComponent] =>
  entry[0] !== 'default' && /^[A-Z]/.test(entry[0]) && typeof entry[1] === 'function';

const icons = iconContext
  .keys()
  .flatMap((path) =>
    Object.entries(iconContext(path))
      .filter(isIconComponent)
      .map(([name, Component]) => ({ Component, name }))
  )
  .filter(
    (icon, index, collection) =>
      collection.findIndex((candidate) => candidate.name === icon.name) === index
  )
  .sort((firstIcon, secondIcon) => firstIcon.name.localeCompare(secondIcon.name));

const iconComponents = Object.fromEntries(
  icons.map(({ Component, name }) => [name, Component])
) as Record<string, IconComponent>;

const iconNames = icons.map(({ name }) => name);

const getIconColor = (theme: unknown) => (theme === 'dark' ? '#f8fafc' : '#111827');
const getLabelColor = (theme: unknown) => (theme === 'dark' ? '#cbd5e1' : '#374151');
const getBorderColor = (theme: unknown) => (theme === 'dark' ? '#334155' : '#d1d5db');

const IconsGallery = ({ theme }: { theme: unknown }) => (
  <View style={styles.grid}>
    {icons.map(({ name, Component }) => (
      <View key={name} style={[styles.item, { borderColor: getBorderColor(theme) }]}>
        <Component
          color={getIconColor(theme)}
          height={32}
          stroke={getIconColor(theme)}
          width={32}
        />
        <Text style={[styles.label, { color: getLabelColor(theme) }]}>{name}</Text>
      </View>
    ))}
  </View>
);

const SelectedIcon = ({ color, height, icon, theme, width }: IconStoryArgs & { theme: unknown }) => {
  const Component = iconComponents[icon] ?? iconComponents[iconNames[0]];
  const resolvedColor = color ?? getIconColor(theme);

  if (!Component) {
    return null;
  }

  return (
    <View style={styles.selected}>
      <Component color={resolvedColor} height={height} stroke={resolvedColor} width={width} />
      <Text style={[styles.label, { color: getLabelColor(theme) }]}>{icon}</Text>
    </View>
  );
};

const meta: Meta<IconStoryArgs> = {
  title: 'Icons/All',
  args: {
    color: undefined,
    height: 48,
    icon: iconNames[0],
    width: 48,
  },
  argTypes: {
    color: {
      control: 'color',
    },
    height: {
      control: 'number',
    },
    icon: {
      control: 'select',
      options: iconNames,
    },
    width: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: (_args, context) => <IconsGallery theme={context.globals.theme} />,
};

export const Selected: Story = {
  args: {
    color: undefined,
    height: 48,
    icon: iconNames[0],
    width: 48,
  },
  render: (args, context) => (
    <SelectedIcon key={String(args.icon)} {...args} theme={context.globals.theme} />
  ),
};

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
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    minHeight: 96,
    padding: 16,
    width: 120,
  },
  label: {
    fontSize: 12,
  },
  selected: {
    alignItems: 'center',
    gap: 8,
    padding: 24,
  },
});
