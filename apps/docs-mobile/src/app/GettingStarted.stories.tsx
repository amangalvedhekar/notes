import type { Meta, StoryObj } from '@storybook/react-native';
import { componentCatalog } from '@notes/components';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const componentSections = [
  { title: 'Atoms', items: componentCatalog.atoms },
  { title: 'Molecules', items: componentCatalog.molecules },
  { title: 'Templates', items: componentCatalog.templates },
  { title: 'Icons', items: componentCatalog.icons },
] as const;


const meta: Meta<typeof View> = {
  title: 'Getting Started/Overview',
  component: View,
  parameters: {
    actions: {
      disable: true,
    },
    controls: {
      disable: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: () => (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Components Documentation</Text>
        <Text style={styles.description}>
          This Storybook documents the UI components in @notes/components. These components are wrappers around
          Tamagui (https://tamagui.dev/).
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Theme Object</Text>
          <Text style={styles.description}>
            Storybook exposes a theme global with light and dark options:
          </Text>
        </View>

        {componentSections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((componentName) => (
              <Text key={componentName} style={styles.componentItem}>
                {`\u2022 ${componentName}`}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  ),
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#f8f6ef',
    borderRadius: 16,
    padding: 20,
    gap: 12,
  },
  title: {
    color: '#111827',
    fontSize: 24,
    fontWeight: '800',
  },
  description: {
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    gap: 6,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  componentItem: {
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
  },
});
