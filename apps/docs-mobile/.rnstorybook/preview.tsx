import { View } from 'react-native';
import type { Preview } from '@storybook/react-native';
import { ThemeProvider } from '@notes/components';

const themeOptions = ['light', 'dark'] as const;

type ThemeName = (typeof themeOptions)[number];

const getThemeName = (theme: unknown): ThemeName => (theme === 'dark' ? 'dark' : 'light');

const preview: Preview = {
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

      return (
        <ThemeProvider defaultTheme={theme}>
          <View
            style={{
              backgroundColor: theme === 'dark' ? '#0b1220' : '#ffffff',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Story />
          </View>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
