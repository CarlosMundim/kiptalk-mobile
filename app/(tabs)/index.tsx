import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { DAILY_LIFE_COURSE, type VocabularyItem } from '../../lib/training-data';

function VocabCard({ item }: { item: VocabularyItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Pressable style={styles.vocabCard} onPress={() => setExpanded(!expanded)}>
      <View style={styles.vocabMain}>
        <Text style={styles.vocabJp}>{item.jp}</Text>
        <Text style={styles.vocabRomaji}>{item.romaji}</Text>
      </View>
      <Text style={styles.vocabMeaning}>{item.en}</Text>
      {item.pt && <Text style={styles.vocabPt}>{item.pt}</Text>}
      {expanded && item.note && (
        <Text style={styles.vocabNote}>💡 {item.note}</Text>
      )}
    </Pressable>
  );
}

function CategorySection({ name, vocab }: { name: string; vocab: VocabularyItem[] }) {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryTitle}>{name}</Text>
      <View style={styles.grid}>
        {vocab.map((item, i) => (
          <VocabCard key={i} item={item} />
        ))}
      </View>
    </View>
  );
}

export default function DailyLifeScreen() {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.desc}>{DAILY_LIFE_COURSE.description}</Text>
        <TextInput
          style={styles.search}
          placeholder="Search..."
          placeholderTextColor="#64748b"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {DAILY_LIFE_COURSE.categories.map((cat, i) => (
          <CategorySection
            key={i}
            name={cat.name}
            vocab={cat.vocabulary.filter(
              (v) =>
                !search ||
                v.jp.includes(search) ||
                v.en.toLowerCase().includes(search.toLowerCase()) ||
                v.romaji.includes(search.toLowerCase())
            )}
          />
        ))}
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#21262d' },
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
  category: { marginBottom: 24 },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f59e0b',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
    paddingBottom: 6,
  },
  grid: { gap: 8 },
  vocabCard: {
    backgroundColor: '#111820',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  vocabMain: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 4 },
  vocabJp: { fontSize: 18, fontWeight: '700', color: '#f59e0b' },
  vocabRomaji: { fontSize: 12, color: '#64748b' },
  vocabMeaning: { fontSize: 13, color: '#e2e8f0' },
  vocabPt: { fontSize: 12, color: '#64748b', fontStyle: 'italic', marginTop: 2 },
  vocabNote: { fontSize: 11, color: '#64748b', fontStyle: 'italic', marginTop: 4 },
  spacer: { height: 40 },
});
