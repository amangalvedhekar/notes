import { createElement } from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from '@notes/components';

const themeOptions = ['light', 'dark'] as const;

type ThemeName = (typeof themeOptions)[number];

const getThemeName = (theme: unknown): ThemeName => (theme === 'dark' ? 'dark' : 'light');

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Getting Started', '*'],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Tamagui theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: themeOptions.map((theme) => ({
          title: theme,
          value: theme,
        })),
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = getThemeName(context.globals.theme);

      return createElement(
        ThemeProvider,
        {
          defaultTheme: theme,
          children: createElement(
            'div',
            {
              style: {
                backgroundColor: theme === 'dark' ? '#0b1220' : '#ffffff',
                color: theme === 'dark' ? '#f8fafc' : '#111827',
                minHeight: '100%',
              },
            },
            createElement(Story)
          ),
        }
      );
    },
  ],
};

export default preview;
