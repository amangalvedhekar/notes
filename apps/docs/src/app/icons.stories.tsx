/// <reference types="vite/client" />

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';
import type { SvgProps } from 'react-native-svg';

type IconComponent = ComponentType<SvgProps>;
type IconModule = Record<string, IconComponent>;
type IconName = keyof typeof iconComponents;
type IconStoryArgs = {
  icon: IconName;
};

const iconModules = import.meta.glob<IconModule>(
  '../../../../libs/components/src/lib/components/icons/*.tsx',
  { eager: true }
);

const icons = Object.entries(iconModules)
  .map(([path, module]) => {
    const name = path.split('/').pop()?.replace('.tsx', '') ?? path;

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
          border: `1px solid ${getBorderColor(theme)}`,
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          minHeight: 96,
          padding: 16,
        }}
      >
        <Component
          color={getIconColor(theme)}
          height={32}
          stroke={getIconColor(theme)}
          width={32}
        />
        <span style={{ color: getLabelColor(theme), fontFamily: 'sans-serif', fontSize: 12 }}>
          {name}
        </span>
      </div>
    ))}
  </div>
);

const SelectedIcon = ({ icon, theme }: IconStoryArgs & { theme: unknown }) => {
  const Component = iconComponents[icon];
  const color = getIconColor(theme);

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: 24,
      }}
    >
      <Component color={color} height={48} stroke={color} width={48} />
      <span style={{ color: getLabelColor(theme), fontFamily: 'sans-serif', fontSize: 12 }}>
        {icon}
      </span>
    </div>
  );
};

const meta: Meta<IconStoryArgs> = {
  tags: ['autodocs'],
  title: 'Icons/All',
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
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
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Selected: Story = {
  render: (args, context) => <SelectedIcon {...args} theme={context.globals.theme} />,
  parameters: {
    docs: {
      source: {
        transform: (_code: string, context: { args: IconStoryArgs }) => {
          const icon = context.args.icon;

          return `import { ${icon} } from '@notes/components';

export const Example = () => (
  <${icon} color="currentColor" height={24} width={24} />
);`;
        },
      },
    },
  },
};
