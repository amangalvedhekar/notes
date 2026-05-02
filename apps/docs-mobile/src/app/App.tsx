import { Pressable, StyleSheet, Text, View } from 'react-native';

export type AppProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
  status?: 'Draft' | 'Review' | 'Published';
  onPress?: () => void;
};

export const App = ({
  eyebrow = 'Docs Mobile',
  title = 'React Native Storybook',
  description = 'Use this app as a dedicated mobile canvas for shared UI states and interaction review.',
  ctaLabel = 'Open component',
  status = 'Review',
  onPress,
}: AppProps) => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.badgeRow}>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{status}</Text>
          </View>
        </View>
        <Text style={styles.title} testID="heading">
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>{ctaLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0b1220',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    borderRadius: 28,
    backgroundColor: '#f8f6ef',
    padding: 24,
    gap: 16,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eyebrow: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  badge: {
    borderRadius: 999,
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    color: '#1d4ed8',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    color: '#111827',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 38,
  },
  description: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#111827',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#f8f6ef',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default App;
