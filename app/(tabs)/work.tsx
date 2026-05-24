import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  COMMON_WORKPLACE,
  CAREGIVING_COURSE,
  type VocabularyItem,
} from '../../lib/training-data';

function VocabCard({ item }: { item: VocabularyItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Pressable style={styles.card} onPress={() => setExpanded(!expanded)}>
      <View style={styles.cardMain}>
        <Text style={styles.cardJp}>{item.jp}</Text>
        <Text style={styles.cardRomaji}>{item.romaji}</Text>
      </View>
      <Text style={styles.cardEn}>{item.en}</Text>
      {expanded && item.note && <Text style={styles.cardNote}>💡 {item.note}</Text>}
    </Pressable>
  );
}

export default function WorkScreen() {
  const [search, setSearch] = useState('');
  const [course, setCourse] = useState<'common' | 'caregiving'>('common');

  const data = course === 'common' ? COMMON_WORKPLACE : CAREGIVING_COURSE;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.toggle}>
          <Pressable
            style={[styles.toggleBtn, course === 'common' && styles.toggleActive]}
            onPress={() => setCourse('common')}
          >
            <Text style={[styles.toggleText, course === 'common' && styles.toggleTextActive]}>
              🏢 Common
            </Text>
          </Pressable>
          <Pressable
            style={[styles.toggleBtn, course === 'caregiving' && styles.toggleActive]}
            onPress={() => setCourse('caregiving')}
          >
            <Text style={[styles.toggleText, course === 'caregiving' && styles.toggleTextActive]}>
              🏥 Caregiving
            </Text>
          </Pressable>
        </View>
        <Text style={styles.desc}>{data.description}</Text>
        <TextInput
          style={styles.search}
          placeholder="Search..."
          placeholderTextColor="#64748b"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView style={styles.content}>
        {data.categories.map((cat, i) => {
          const filtered = cat.vocabulary.filter(
            (v) =>
              !search ||
              v.jp.includes(search) ||
              v.en.toLowerCase().includes(search.toLowerCase()) ||
              v.romaji.includes(search.toLowerCase())
          );
          if (filtered.length === 0) return null;
          return (
            <View key={i} style={styles.section}>
              <Text style={styles.sectionTitle}>{cat.name}</Text>
              {filtered.map((item, j) => (
                <VocabCard key={j} item={item} />
              ))}
            </View>
          );
        })}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#21262d' },
  toggle: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  toggleBtn: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#111820',
    borderWidth: 1,
    borderColor: '#21262d',
    alignItems: 'center',
  },
  toggleActive: { borderColor: '#f59e0b', backgroundColor: '#1a1a0a' },
  toggleText: { color: '#64748b', fontSize: 14, fontWeight: '600' },
  toggleTextActive: { color: '#f59e0b' },
  desc: { color: '#64748b', fontSize: 13, marginBottom: 10, lineHeight: 18 },
  search: {
    backgroundColor: '#111820',
    borderRadius: 8,
    padding: 10,
    color: '#e2e8f0',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  content: { flex: 1, padding: 16 },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f59e0b',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
    paddingBottom: 6,
  },
  card: {
    backgroundColor: '#111820',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#21262d',
    marginBottom: 8,
  },
  cardMain: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 4 },
  cardJp: { fontSize: 18, fontWeight: '700', color: '#f59e0b' },
  cardRomaji: { fontSize: 12, color: '#64748b' },
  cardEn: { fontSize: 13, color: '#e2e8f0' },
  cardNote: { fontSize: 11, color: '#64748b', fontStyle: 'italic', marginTop: 4 },
});
