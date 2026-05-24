import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { getAllCultureModules } from '../../lib/training-data';

export default function CultureScreen() {
  const modules = getAllCultureModules();
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.intro}>
          WA (和) is the foundation of Japanese society. These modules teach the unwritten rules
          of living and working in Japan — what nobody tells you but everyone expects you to know.
        </Text>

        {modules.map((mod) => (
          <View key={mod.id} style={styles.module}>
            <Text style={styles.moduleTitle}>
              {mod.icon} {mod.title_en}
            </Text>
            <Text style={styles.moduleJa}>{mod.title_ja}</Text>
            <Text style={styles.moduleDesc}>{mod.description}</Text>

            {mod.lessons.map((lesson, li) => {
              const key = `${mod.id}-${li}`;
              const open = expandedLesson === key;
              return (
                <View key={key} style={styles.lesson}>
                  <Pressable
                    style={styles.lessonHeader}
                    onPress={() => setExpandedLesson(open ? null : key)}
                  >
                    <Text style={styles.lessonArrow}>{open ? '▼' : '▶'}</Text>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  </Pressable>
                  {open && (
                    <View style={styles.lessonContent}>
                      {lesson.content.map((item, ci) => (
                        <View key={ci} style={[styles.item, styles[`type_${item.type}` as keyof typeof styles] || {}]}>
                          {item.type === 'phrase' && (
                            <>
                              <Text style={styles.phraseJp}>{item.jp}</Text>
                              <Text style={styles.phraseRomaji}>{item.romaji}</Text>
                              <Text style={styles.phraseMeaning}>{item.meaning}</Text>
                            </>
                          )}
                          {item.type === 'event' && (
                            <View style={styles.eventItem}>
                              <Text style={styles.eventMonth}>{item.month}</Text>
                              <Text style={styles.eventName}>{item.name}</Text>
                              <Text style={styles.eventWhat}>{item.what}</Text>
                            </View>
                          )}
                          {(item.type === 'concept' || item.type === 'example') && (
                            <Text style={item.importance === 'critical' ? styles.critical : styles.concept}>
                              {item.type === 'concept' ? '📖 ' : '💬 '}
                              {item.text}
                            </Text>
                          )}
                          {item.type === 'do' && (
                            <Text style={styles.doItem}>✅ {item.text}</Text>
                          )}
                          {item.type === 'dont' && (
                            <Text style={[styles.dontItem, item.severity === 'critical' && styles.dontCritical]}>
                              ❌ {item.text}
                            </Text>
                          )}
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  content: { flex: 1, padding: 16 },
  intro: { color: '#64748b', fontSize: 13, lineHeight: 20, marginBottom: 20 },

  module: {
    backgroundColor: '#111820',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#21262d',
  },
  moduleTitle: { fontSize: 18, fontWeight: '700', color: '#f59e0b', marginBottom: 2 },
  moduleJa: { fontSize: 12, color: '#64748b', marginBottom: 4 },
  moduleDesc: { fontSize: 13, color: '#94a3b8', marginBottom: 12, lineHeight: 18 },

  lesson: { marginTop: 4 },
  lessonHeader: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8, gap: 8 },
  lessonArrow: { color: '#f59e0b', fontSize: 10, width: 16 },
  lessonTitle: { color: '#e2e8f0', fontSize: 14, fontWeight: '600', flex: 1 },
  lessonContent: { paddingLeft: 24, paddingBottom: 8 },

  item: { paddingVertical: 4 },
  type_phrase: {
    backgroundColor: '#0d1117',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  phraseJp: { fontSize: 16, fontWeight: '700', color: '#f59e0b' },
  phraseRomaji: { fontSize: 12, color: '#64748b' },
  phraseMeaning: { fontSize: 13, color: '#e2e8f0', marginTop: 2 },
  eventItem: {
    backgroundColor: '#0d1117',
    borderRadius: 8,
    padding: 10,
    marginVertical: 4,
  },
  eventMonth: {
    backgroundColor: '#f59e0b',
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  eventName: { color: '#e2e8f0', fontSize: 14, fontWeight: '600', marginBottom: 2 },
  eventWhat: { color: '#64748b', fontSize: 12, lineHeight: 16 },

  concept: { color: '#e2e8f0', fontSize: 13, lineHeight: 19 },
  critical: { color: '#f59e0b', fontWeight: '700', fontSize: 13, lineHeight: 19 },
  doItem: { color: '#4ade80', fontSize: 13, lineHeight: 19 },
  dontItem: { color: '#f87171', fontSize: 13, lineHeight: 19 },
  dontCritical: { fontWeight: '700', fontSize: 14 },
});
