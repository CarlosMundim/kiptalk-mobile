import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getAllTaboos } from '../../lib/training-data';

export default function TaboosScreen() {
  const taboos = getAllTaboos();

  return (
    <View style={styles.container}>
      <View style={styles.warning}>
        <Text style={styles.warningText}>
          ⚠️ These are NOT suggestions. These are survival requirements for living
          and working in Japan. Ignoring some of these can get you fired, evicted,
          or arrested.
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {taboos.map((taboo, i) => (
          <View
            key={i}
            style={[
              styles.tabooItem,
              taboo.severity === 'critical' && styles.tabooCritical,
              taboo.severity === 'high' && styles.tabooHigh,
              taboo.severity === 'medium' && styles.tabooMedium,
            ]}
          >
            <Text style={styles.tabooIcon}>❌</Text>
            <View style={styles.tabooBody}>
              <Text style={styles.tabooText}>{taboo.text}</Text>
              <Text style={styles.tabooModule}>{taboo.module}</Text>
            </View>
            <View style={[styles.severityBadge, styles[`sev_${taboo.severity}` as keyof typeof styles] || {}]}>
              <Text style={styles.severityText}>{taboo.severity.toUpperCase()}</Text>
            </View>
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  warning: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
    borderRadius: 10,
    padding: 14,
    margin: 16,
    marginBottom: 8,
  },
  warningText: { color: '#f59e0b', fontSize: 13, fontWeight: '600', lineHeight: 18, textAlign: 'center' },
  content: { flex: 1, paddingHorizontal: 16 },

  tabooItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
    gap: 10,
  },
  tabooCritical: {
    backgroundColor: 'rgba(248, 113, 113, 0.1)',
    borderLeftWidth: 3,
    borderLeftColor: '#f87171',
  },
  tabooHigh: {
    backgroundColor: 'rgba(248, 113, 113, 0.05)',
    borderLeftWidth: 3,
    borderLeftColor: 'rgba(248, 113, 113, 0.5)',
  },
  tabooMedium: {
    borderLeftWidth: 3,
    borderLeftColor: '#21262d',
  },
  tabooIcon: { fontSize: 16 },
  tabooBody: { flex: 1 },
  tabooText: { color: '#e2e8f0', fontSize: 13, lineHeight: 18 },
  tabooModule: { color: '#64748b', fontSize: 11, marginTop: 2 },
  severityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: '#0d1117',
  },
  sev_critical: { backgroundColor: 'rgba(248, 113, 113, 0.2)' },
  sev_high: { backgroundColor: 'rgba(248, 113, 113, 0.1)' },
  sev_medium: { backgroundColor: 'transparent' },
  severityText: { color: '#64748b', fontSize: 9, fontWeight: '700' },
});
