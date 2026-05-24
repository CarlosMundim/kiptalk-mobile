import { useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { getAllReverseCourses } from '../../lib/training-data';

export default function JPtoScreen() {
  const courses = getAllReverseCourses();
  const [selectedCourse, setSelectedCourse] = useState(0);

  const course = courses[selectedCourse];

  return (
    <View style={styles.container}>
      {/* Language selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.langSelector}
        contentContainerStyle={styles.langSelectorContent}
      >
        {courses.map((c, i) => (
          <Pressable
            key={i}
            style={[styles.langPill, selectedCourse === i && styles.langPillActive]}
            onPress={() => setSelectedCourse(i)}
          >
            <Text style={styles.langFlag}>{c.icon}</Text>
            <Text style={[styles.langLabel, selectedCourse === i && styles.langLabelActive]}>
              {c.target_lang}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Course content */}
      <View style={styles.header}>
        <Text style={styles.courseTitle}>{course.icon} {course.name_ja}</Text>
        <Text style={styles.courseDesc}>{course.description}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {course.categories.map((cat, i) => (
          <View key={i} style={styles.category}>
            <Text style={styles.categoryTitle}>
              {cat.name} ({cat.name_ja})
            </Text>
            {cat.vocabulary.map((item, j) => (
              <View key={j} style={styles.card}>
                <Text style={styles.cardJp}>{item.jp}</Text>
                <View style={styles.arrow}>
                  <Text style={styles.arrowText}>↓</Text>
                </View>
                <Text style={styles.cardTarget}>{item.target}</Text>
                {item.note && <Text style={styles.cardNote}>💡 {item.note}</Text>}
              </View>
            ))}
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  langSelector: {
    maxHeight: 52,
    borderBottomWidth: 1,
    borderBottomColor: '#21262d',
  },
  langSelectorContent: { paddingHorizontal: 12, paddingVertical: 10, gap: 8 },
  langPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#111820',
    borderWidth: 1,
    borderColor: '#21262d',
    gap: 6,
  },
  langPillActive: {
    borderColor: '#f59e0b',
    backgroundColor: '#1a1a0a',
  },
  langFlag: { fontSize: 16 },
  langLabel: { color: '#64748b', fontSize: 13, fontWeight: '600' },
  langLabelActive: { color: '#f59e0b' },

  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#21262d' },
  courseTitle: { fontSize: 18, fontWeight: '700', color: '#f59e0b', marginBottom: 4 },
  courseDesc: { color: '#64748b', fontSize: 12, lineHeight: 18 },

  content: { flex: 1, padding: 16 },
  category: { marginBottom: 24 },
  categoryTitle: {
    fontSize: 15,
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
  cardJp: { fontSize: 16, fontWeight: '700', color: '#e2e8f0', marginBottom: 4 },
  arrow: { alignItems: 'center', marginVertical: 2 },
  arrowText: { color: '#f59e0b', fontSize: 14 },
  cardTarget: { fontSize: 17, fontWeight: '700', color: '#f59e0b', marginBottom: 4 },
  cardNote: { fontSize: 11, color: '#64748b', fontStyle: 'italic' },
});
