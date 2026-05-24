import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { METHODOLOGY_PRINCIPLES } from '../../lib/training-data';

export default function MethodScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>The Ezoe Method</Text>
          <Text style={styles.introBody}>
            Developed over 40 years at the Shinjuku Japanese Language Institute (SNG).
            Students achieve basic fluency in 6 months by speaking from day one —
            not memorizing rules, but using the language.
          </Text>
        </View>

        {METHODOLOGY_PRINCIPLES.map((p, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>
              {p.icon} {p.principle}
            </Text>
            <View style={styles.cardBody}>
              <Text style={styles.ezoe}>🏫 SNG: {p.from_ezoe}</Text>
              <Text style={styles.kiptalk}>💡 KipTalk: {p.kip_talk_implementation}</Text>
              <Text style={styles.why}>🧠 {p.why_it_works}</Text>
            </View>
          </View>
        ))}

        <View style={styles.schedule}>
          <Text style={styles.scheduleTitle}>📅 6-Month Fast Track</Text>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 1 — Survival</Text>
            <Text style={styles.monthItems}>Greetings, numbers, self-introduction, asking for help</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 2 — Daily Life</Text>
            <Text style={styles.monthItems}>Shopping, directions, doctor visits, transportation</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 3 — Social</Text>
            <Text style={styles.monthItems}>Neighbors, small talk, invitations, phone calls</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 4 — Workplace</Text>
            <Text style={styles.monthItems}>Instructions, hōrensō, meetings, email basics</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 5 — Culture</Text>
            <Text style={styles.monthItems}>WA, honne/tatemae, seasonal events, gift etiquette</Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthLabel}>Month 6 — JLPT N4</Text>
            <Text style={styles.monthItems}>Reading, writing, formal situations, certification prep</Text>
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  content: { flex: 1, padding: 16 },

  intro: {
    backgroundColor: '#111820',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  introTitle: { color: '#f59e0b', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  introBody: { color: '#e2e8f0', fontSize: 13, lineHeight: 20 },

  card: {
    backgroundColor: '#111820',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  cardTitle: { color: '#f59e0b', fontSize: 15, fontWeight: '700', marginBottom: 8 },
  cardBody: { gap: 4 },
  ezoe: { color: '#64748b', fontSize: 12, lineHeight: 17 },
  kiptalk: { color: '#e2e8f0', fontSize: 12, lineHeight: 17 },
  why: { color: '#4ade80', fontSize: 12, fontStyle: 'italic', lineHeight: 17 },

  schedule: {
    backgroundColor: '#111820',
    borderRadius: 12,
    padding: 16,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  scheduleTitle: { color: '#f59e0b', fontSize: 16, fontWeight: '700', marginBottom: 12 },
  month: { marginBottom: 10 },
  monthLabel: { color: '#e2e8f0', fontSize: 14, fontWeight: '600', marginBottom: 2 },
  monthItems: { color: '#64748b', fontSize: 12, lineHeight: 16 },
});
