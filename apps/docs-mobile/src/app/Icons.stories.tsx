/// <reference types="@storybook/react-native/metro-env" />

import type { Meta, StoryObj } from '@storybook/react-native';
import type { ComponentType } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { SvgProps } from 'react-native-svg';

type IconComponent = ComponentType<SvgProps>;
type IconModule = Record<string, IconComponent>;
type IconName = keyof typeof iconComponents;
type IconStoryArgs = {
  icon: IconName;
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

const icons = iconContext
  .keys()
  .map((path) => {
    const name = path.replace('./', '').replace('.tsx', '');
    const module = iconContext(path);

    return {
      Component: module[name],
      name,
    };
  })
  .filter((icon): icon is { Component: IconComponent; name: string } => !!icon.Component)
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

const SelectedIcon = ({ icon, theme }: IconStoryArgs & { theme: unknown }) => {
  const Component = iconComponents[icon];
  const color = getIconColor(theme);

  return (
    <View style={styles.selected}>
      <Component color={color} height={48} stroke={color} width={48} />
      <Text style={[styles.label, { color: getLabelColor(theme) }]}>{icon}</Text>
    </View>
  );
};

const meta: Meta<IconStoryArgs> = {
  title: 'Icons/All',
  args: {
    icon: iconNames[0],
  },
  argTypes: {
    icon: {
      control: 'select',
      options: iconNames,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: (_args, context) => <IconsGallery theme={context.globals.theme} />,
};

export const Selected: Story = {
  render: (args, context) => <SelectedIcon {...args} theme={context.globals.theme} />,
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
