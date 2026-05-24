/**
 * KipTalk Training Data for Desk Koda
 * Japanese for Careworkers — embedded in the Medical Clerk Workstation.
 *
 * Shared source of truth. Used by both the KipTalk Kivy app and Desk Koda's
 * training panel. Update here and both apps benefit.
 */

export interface VocabularyItem {
  jp: string;
  romaji: string;
  en: string;
  pt?: string;
  note?: string;
}

export interface CultureContent {
  type: 'concept' | 'do' | 'dont' | 'phrase' | 'example' | 'event';
  text?: string;
  jp?: string;
  romaji?: string;
  meaning?: string;
  importance?: 'critical' | 'high' | 'medium';
  severity?: 'critical' | 'high' | 'medium';
  what?: string;
  month?: string;
  name?: string;
}

export interface CultureLesson {
  title: string;
  content: CultureContent[];
}

export interface CultureModule {
  title_ja: string;
  title_en: string;
  title_pt: string;
  icon: string;
  description: string;
  lessons: CultureLesson[];
}

export interface IndustryCourse {
  name_ja: string;
  name_en: string;
  name_pt: string;
  description: string;
  icon: string;
  categories: { name: string; vocabulary: VocabularyItem[] }[];
}

// ─── Caregiving Japanese (for Desk Koda's target audience) ───

export const CAREGIVING_COURSE: IndustryCourse = {
  name_ja: '介護',
  name_en: 'Caregiving Japanese',
  name_pt: 'Japonês para Cuidadores',
  description:
    'Essential Japanese for nursing homes, hospitals, and home care. Talk to elderly residents, understand care instructions, read medical labels.',
  icon: '🏥',
  categories: [
    {
      name: 'Greetings & Daily Communication',
      vocabulary: [
        { jp: 'おはようございます', romaji: 'ohayō gozaimasu', en: 'Good morning', note: 'Use until ~10am' },
        { jp: 'お疲れ様です', romaji: 'otsukaresama desu', en: 'Good work today', note: 'Say to colleagues throughout the day' },
        { jp: '失礼します', romaji: 'shitsurei shimasu', en: 'Excuse me (entering/leaving)', pt: 'Com licença' },
        { jp: '大丈夫ですか', romaji: 'daijōbu desu ka', en: 'Are you okay?', note: 'Ask residents frequently' },
        { jp: 'お元気ですか', romaji: 'ogenki desu ka', en: 'How are you? (respectful)' },
        { jp: 'ゆっくりでいいですよ', romaji: 'yukkuri de ii desu yo', en: 'Take your time, it\'s okay' },
        { jp: 'お手伝いします', romaji: 'otetsudai shimasu', en: 'I\'ll help you' },
        { jp: '何か飲みますか', romaji: 'nanika nomimasu ka', en: 'Would you like something to drink?' },
      ],
    },
    {
      name: 'Body & Health',
      vocabulary: [
        { jp: 'お体', romaji: 'okarada', en: 'Body (respectful form)' },
        { jp: '熱があります', romaji: 'netsu ga arimasu', en: 'Has a fever' },
        { jp: '痛いですか', romaji: 'itai desu ka', en: 'Does it hurt?' },
        { jp: 'お薬', romaji: 'okusuri', en: 'Medicine (polite)', note: 'Always use お prefix with patients' },
        { jp: '血圧', romaji: 'ketsuatsu', en: 'Blood pressure' },
        { jp: '体温', romaji: 'taion', en: 'Body temperature' },
        { jp: '脈拍', romaji: 'myakuhaku', en: 'Pulse' },
        { jp: '酸素飽和度', romaji: 'sanso hōwado', en: 'Oxygen saturation (SpO2)' },
      ],
    },
    {
      name: 'Care Tasks',
      vocabulary: [
        { jp: '食事介助', romaji: 'shokuji kaijo', en: 'Eating assistance' },
        { jp: '入浴介助', romaji: 'nyūyoku kaijo', en: 'Bathing assistance' },
        { jp: '排泄介助', romaji: 'haisetsu kaijo', en: 'Toileting assistance' },
        { jp: '移乗介助', romaji: 'ijō kaijo', en: 'Transfer assistance (bed ↔ wheelchair)' },
        { jp: 'おむつ交換', romaji: 'omutsu kōkan', en: 'Diaper change' },
        { jp: '体位変換', romaji: 'taii henkan', en: 'Position change (to prevent bedsores)' },
        { jp: '口腔ケア', romaji: 'kōkū kea', en: 'Oral care' },
        { jp: 'リハビリ', romaji: 'rihabiri', en: 'Rehabilitation / Physiotherapy' },
      ],
    },
    {
      name: 'Medical Terms for Clerks',
      vocabulary: [
        { jp: 'カルテ', romaji: 'karute', en: 'Medical record / Chart', note: 'From German "Karte"' },
        { jp: '処方箋', romaji: 'shohōsen', en: 'Prescription' },
        { jp: '紹介状', romaji: 'shōkaijō', en: 'Referral letter' },
        { jp: '診断書', romaji: 'shindansho', en: 'Medical certificate' },
        { jp: '保険証', romaji: 'hokenshō', en: 'Insurance card' },
        { jp: '受付', romaji: 'uketsuke', en: 'Reception desk' },
        { jp: '予約', romaji: 'yoyaku', en: 'Appointment' },
        { jp: 'レセプト', romaji: 'reseputo', en: 'Medical fee receipt (receipt)', note: '保険請求 with レセプト' },
        { jp: '患者様', romaji: 'kanja-sama', en: 'Patient (respectful)', note: 'Always use 様 not さん for patients' },
      ],
    },
  ],
};

// ─── Daily Life Japanese (for foreign residents — not workers) ───

export const DAILY_LIFE_COURSE: IndustryCourse = {
  name_ja: '日常生活',
  name_en: 'Daily Life Japanese',
  name_pt: 'Japonês do Dia a Dia',
  description:
    'For foreign residents living in Japan — shopping, doctor visits, city hall, post office, neighbors, kids\' school. Everything you need to live, not just work.',
  icon: '🏠',
  categories: [
    {
      name: 'Supermarket & Shopping',
      vocabulary: [
        { jp: '袋はいりますか', romaji: 'fukuro wa irimasu ka', en: 'Do you need a bag?', note: 'They charge for bags now' },
        { jp: 'レジ袋', romaji: 'reji bukuro', en: 'Plastic shopping bag' },
        { jp: '温めますか', romaji: 'atatamemasu ka', en: 'Shall I heat this up?', note: 'For bento boxes at konbini' },
        { jp: '箸お付けしますか', romaji: 'hashi o tsukemasu ka', en: 'Would you like chopsticks?' },
        { jp: 'ポイントカード', romaji: 'pointo kādo', en: 'Loyalty card', note: 'Every store has one' },
        { jp: '割引', romaji: 'waribiki', en: 'Discount' },
        { jp: '半額', romaji: 'hangaku', en: 'Half price', note: 'Look for the orange sticker!' },
        { jp: '消費税', romaji: 'shōhizei', en: 'Consumption tax (10%)', pt: 'Imposto (10%)' },
        { jp: 'お買い得', romaji: 'okaidoku', en: 'Good deal / Bargain' },
      ],
    },
    {
      name: 'City Hall & Documents (区役所・市役所)',
      vocabulary: [
        { jp: '区役所', romaji: 'kuyakusho', en: 'Ward office', note: 'Where you do most paperwork' },
        { jp: '市役所', romaji: 'shiyakusho', en: 'City hall' },
        { jp: '住民票', romaji: 'jūminhyō', en: 'Residence certificate', note: 'Essential document for everything' },
        { jp: '在留カード', romaji: 'zairyū kādo', en: 'Residence card', note: 'Must carry at all times by law' },
        { jp: 'マイナンバー', romaji: 'mainambā', en: 'My Number (national ID)' },
        { jp: '転入届', romaji: 'tennyū todoke', en: 'Moving-in notification', note: 'Must file within 14 days' },
        { jp: '転出届', romaji: 'tenshutsu todoke', en: 'Moving-out notification' },
        { jp: '印鑑登録', romaji: 'inkan tōroku', en: 'Seal registration', note: 'Register your hanko stamp' },
        { jp: '納税', romaji: 'nōzei', en: 'Tax payment' },
        { jp: '保険料', romaji: 'hoken ryō', en: 'Insurance premium', note: 'National health insurance ¥¥¥' },
      ],
    },
    {
      name: 'Doctor & Hospital (病院・クリニック)',
      vocabulary: [
        { jp: '診察券', romaji: 'shinsatsu ken', en: 'Patient card', note: 'You\'ll get one at every clinic' },
        { jp: '保険証見せてください', romaji: 'hokenshō misete kudasai', en: 'Please show your insurance card' },
        { jp: '初診ですか', romaji: 'shoshin desu ka', en: 'Is this your first visit?' },
        { jp: '症状', romaji: 'shōjō', en: 'Symptoms' },
        { jp: 'お薬手帳', romaji: 'okusuri techō', en: 'Medication notebook', note: 'Bring it — pharmacists fill it' },
        { jp: '処方箋', romaji: 'shohōsen', en: 'Prescription' },
        { jp: '薬局', romaji: 'yakkyoku', en: 'Pharmacy', note: 'Separate from the clinic in Japan' },
        { jp: '内科', romaji: 'naika', en: 'Internal medicine' },
        { jp: '小児科', romaji: 'shōnika', en: 'Pediatrics', note: 'For kids under 15' },
        { jp: '歯科', romaji: 'shika', en: 'Dentist' },
      ],
    },
    {
      name: 'Neighbors & Community',
      vocabulary: [
        { jp: 'ご近所', romaji: 'gokinjo', en: 'Neighborhood / Neighbors' },
        { jp: 'お隣さん', romaji: 'otonari-san', en: 'Next-door neighbor' },
        { jp: '町内会', romaji: 'chōnaikai', en: 'Neighborhood association', note: 'You may be asked to join' },
        { jp: '回覧板', romaji: 'kairanban', en: 'Circulating notice board', note: 'Read, stamp, pass to next house' },
        { jp: 'つまらないものですが', romaji: 'tsumaranai mono desu ga', en: '"Just a small thing" — said when giving a gift', note: 'Must say this!' },
        { jp: 'お邪魔します', romaji: 'ojama shimasu', en: 'Excuse me for intruding (entering a home)' },
        { jp: 'いつもお世話になっております', romaji: 'itsumo osewa ni natte orimasu', en: 'Thank you for always looking after us', note: 'Standard neighbor greeting' },
        { jp: '自治会費', romaji: 'jichikai hi', en: 'Residents\' association fee', note: '~¥300/month' },
      ],
    },
    {
      name: 'Post Office & Bank',
      vocabulary: [
        { jp: '郵便局', romaji: 'yūbin kyoku', en: 'Post office' },
        { jp: '切手', romaji: 'kitte', en: 'Postage stamp' },
        { jp: '書留', romaji: 'kakitome', en: 'Registered mail' },
        { jp: '口座', romaji: 'kōza', en: 'Bank account' },
        { jp: '振込', romaji: 'furikomi', en: 'Bank transfer' },
        { jp: '引き出し', romaji: 'hikidashi', en: 'Withdrawal' },
        { jp: 'キャッシュカード', romaji: 'kyasshu kādo', en: 'ATM card' },
        { jp: '通帳', romaji: 'tsūchō', en: 'Bank book (passbook)', note: 'Japanese banks still use these' },
      ],
    },
    {
      name: 'Transportation',
      vocabulary: [
        { jp: '切符', romaji: 'kippu', en: 'Ticket (paper)' },
        { jp: '定期券', romaji: 'teiki ken', en: 'Commuter pass' },
        { jp: '改札', romaji: 'kaisatsu', en: 'Ticket gate' },
        { jp: '乗り換え', romaji: 'norikae', en: 'Transfer / Change trains' },
        { jp: '各駅停車', romaji: 'kakueki teisha', en: 'Local train (stops at every station)' },
        { jp: '急行', romaji: 'kyūkō', en: 'Express train', note: 'Might skip your station!' },
        { jp: '終電', romaji: 'shūden', en: 'Last train', note: 'Usually around midnight' },
        { jp: 'バス停', romaji: 'basu tei', en: 'Bus stop' },
        { jp: '料金', romaji: 'ryōkin', en: 'Fare / Fee' },
      ],
    },
  ],
};

// ─── Common workplace Japanese (all industries) ───

export const COMMON_WORKPLACE: IndustryCourse = {
  name_ja: '共通',
  name_en: 'Common Workplace Japanese',
  name_pt: 'Japonês Básico para Trabalho',
  description: 'Phrases every foreign worker needs — greetings, safety, asking for help.',
  icon: '🏢',
  categories: [
    {
      name: 'Safety & Emergency',
      vocabulary: [
        { jp: '危ない！', romaji: 'abunai!', en: 'Danger! / Watch out!', note: '🚨 Critical' },
        { jp: '火事', romaji: 'kaji', en: 'Fire!', note: '🚒 Emergency word' },
        { jp: '地震', romaji: 'jishin', en: 'Earthquake', note: '🫨 Japan has many' },
        { jp: '避難してください', romaji: 'hinan shite kudasai', en: 'Please evacuate' },
        { jp: '助けてください', romaji: 'tasukete kudasai', en: 'Help me please', note: '🚨 Critical' },
        { jp: '救急車', romaji: 'kyūkyūsha', en: 'Ambulance' },
        { jp: 'けがをしました', romaji: 'kega o shimashita', en: 'I\'m injured' },
        { jp: '気分が悪いです', romaji: 'kibun ga warui desu', en: 'I feel sick' },
      ],
    },
    {
      name: 'Instructions & Directions',
      vocabulary: [
        { jp: 'ここ / そこ / あそこ', romaji: 'koko / soko / asoko', en: 'Here / There / Over there' },
        { jp: '右 / 左', romaji: 'migi / hidari', en: 'Right / Left' },
        { jp: '持ってきてください', romaji: 'motte kite kudasai', en: 'Please bring it' },
        { jp: '片付けてください', romaji: 'katazukete kudasai', en: 'Please clean up' },
        { jp: 'わかりました', romaji: 'wakarimashita', en: 'I understand / Understood' },
        { jp: 'もう一度お願いします', romaji: 'mō ichido onegai shimasu', en: 'Please say that again' },
      ],
    },
  ],
};

// ─── Culture (WA) modules ───

export const CULTURE_MODULES_TS: Record<string, CultureModule> = {
  wa_no_kokoro: {
    title_ja: '和の心',
    title_en: 'The Spirit of WA — Japanese Harmony',
    title_pt: 'O Espírito de WA',
    icon: '🫂',
    description: 'WA (和) is the foundation of Japanese society. It means harmony and putting the group before yourself.',
    lessons: [
      {
        title: 'What is WA?',
        content: [
          { type: 'concept', text: 'WA (和) means "harmony" — everyone moves together. If one person rows differently, the boat spins.', importance: 'critical' },
          { type: 'concept', text: 'In Japan, maintaining WA is often more important than being right.', importance: 'critical' },
          { type: 'example', text: 'If your supervisor gives an instruction you don\'t understand, say 「もう一度確認させてください」(Let me confirm once more). This saves face for both.' },
        ],
      },
      {
        title: 'Reading the Air (空気を読む)',
        content: [
          { type: 'phrase', jp: '空気を読む', romaji: 'kūki o yomu', meaning: 'Read the air — understand the unspoken mood and expectations without being told.' },
          { type: 'concept', text: 'In Japan, communication is often indirect. "It would be nice if this were done..." means DO IT.', importance: 'critical' },
          { type: 'example', text: 'Nobody tells you it\'s time to clean. When everyone starts tidying at 4:55pm, you join. Waiting to be told = failed to read the air.' },
        ],
      },
    ],
  },
  workplace_culture: {
    title_ja: '職場の文化',
    title_en: 'Workplace Culture',
    title_pt: 'Cultura do Trabalho',
    icon: '💼',
    description: 'Japanese workplace rules — hierarchy, communication, and the unwritten expectations.',
    lessons: [
      {
        title: 'Hierarchy & Respect (上下関係)',
        content: [
          { type: 'concept', text: 'Japanese workplaces have clear hierarchies. The senpai-kōhai (先輩-後輩) relationship is everywhere.', importance: 'critical' },
          { type: 'do', text: 'Use keigo (敬語) with anyone senior. Add さん to names. Bow when greeting, deeper for senior people.' },
          { type: 'dont', text: 'Never contradict a senior person in front of others. Correct privately and politely.' },
          { type: 'dont', text: 'Don\'t leave before your boss leaves. At traditional workplaces this is still expected.' },
        ],
      },
      {
        title: 'Hōrensō (報連相) — The Golden Rule',
        content: [
          { type: 'concept', text: 'Hōrensō = 報告 (Report) + 連絡 (Inform) + 相談 (Consult). The golden rule of workplace communication.', importance: 'critical' },
          { type: 'do', text: 'REPORT immediately — good or bad, especially bad. Tell your supervisor everything.' },
          { type: 'do', text: 'CONTACT proactively — 5 minutes late? Call. Machine acting strange? Tell someone.' },
          { type: 'do', text: 'CONSULT before deciding — even small things. "I\'m thinking of doing X, what do you think?"' },
          { type: 'dont', text: 'Never hide a mistake. Hiding a problem is worse than causing it.', severity: 'critical' },
        ],
      },
    ],
  },
  daily_life: {
    title_ja: '日常生活のマナー',
    title_en: 'Daily Life Manners',
    title_pt: 'Modos da Vida Diária',
    icon: '🏠',
    description: 'The rules of daily life nobody writes down. What gets you in trouble with neighbors and landlords.',
    lessons: [
      {
        title: 'Trash & Recycling (ゴミ分別)',
        content: [
          { type: 'concept', text: 'Japanese trash sorting is COMPLICATED and strictly enforced. Wrong trash can be returned to your door.', importance: 'critical' },
          { type: 'do', text: 'Learn your city\'s trash calendar. Each type has a specific day: 燃えるゴミ (burnable), 燃えないゴミ (non-burnable), 資源ごみ (recyclables).' },
          { type: 'dont', text: 'Never put trash out the night before — crows. Put it out in the morning before 8am.' },
        ],
      },
      {
        title: 'Bath & Entryway',
        content: [
          { type: 'concept', text: 'Wash your body BEFORE entering the bath. The bath is for soaking — the whole family uses the same water.', importance: 'high' },
          { type: 'do', text: 'Remove shoes at the entrance (玄関). Non-negotiable in every home and many workplaces.' },
          { type: 'do', text: 'Use toilet slippers (トイレスリッパ) in the bathroom. Never wear them outside the toilet room.' },
        ],
      },
    ],
  },
  communication: {
    title_ja: 'コミュニケーション',
    title_en: 'Japanese Communication Style',
    title_pt: 'Estilo de Comunicação',
    icon: '💬',
    description: 'How Japanese people actually communicate — not textbook Japanese, but real patterns.',
    lessons: [
      {
        title: 'Honne vs Tatemae (本音と建前)',
        content: [
          { type: 'concept', text: 'Honne = true feelings. Tatemae = what you say in public. It\'s not lying — it\'s maintaining social harmony.', importance: 'critical' },
          { type: 'example', text: '"行けたら行く" (I\'ll go if I can) almost always means NO. But saying "no" directly would hurt feelings.' },
          { type: 'do', text: 'Learn to hear the "no" hidden in polite words: 難しいですね = no. 考えておきます = no. 検討します = no.' },
          { type: 'dont', text: 'Never push for a direct yes/no. Three "maybes" = no. Pushing further is aggressive.' },
        ],
      },
      {
        title: 'Aizuchi (相槌) — Active Listening',
        content: [
          { type: 'concept', text: 'You must constantly signal you\'re listening. Silence = not paying attention or disagreeing.', importance: 'high' },
          { type: 'do', text: 'Say はい (hai), ええ (ee), なるほど (naruhodo) every 10-15 seconds while someone is talking. Nod while doing it.' },
          { type: 'concept', text: 'はい doesn\'t mean "yes I agree" — it means "I\'m listening, continue."' },
        ],
      },
    ],
  },
  taboos: {
    title_ja: 'タブー — 絶対にしないこと',
    title_en: 'TABOOS — What to Never Do',
    title_pt: 'TABUS — O Que Nunca Fazer',
    icon: '⚠️',
    description: 'Critical things that will get you fired, evicted, or arrested.',
    lessons: [
      {
        title: 'Workplace Taboos',
        content: [
          { type: 'dont', text: 'Never be late. 5 minutes late = 30 minutes early. If your shift starts at 9:00, be ready at 8:55.', severity: 'critical' },
          { type: 'dont', text: 'Never use your phone during work hours unless emergency.', severity: 'critical' },
          { type: 'dont', text: 'Never eat while walking. Considered sloppy and disrespectful.', severity: 'high' },
          { type: 'dont', text: 'Never blow your nose in public. Sniffling is acceptable — nose-blowing is not.', severity: 'medium' },
        ],
      },
      {
        title: 'Legal',
        content: [
          { type: 'dont', text: 'Never carry a knife without clear work reason. Even a pocket knife can get you arrested.', severity: 'critical' },
          { type: 'dont', text: 'Never ride a bicycle drunk — it\'s a DUI. Up to 5 years prison.', severity: 'critical' },
          { type: 'dont', text: 'Never possess any illegal drug. 5+ years prison + deportation.', severity: 'critical' },
          { type: 'do', text: 'If police stop you, stay calm, show your 在留カード (residence card). You must carry it at all times by law.' },
        ],
      },
    ],
  },
  seasonal: {
    title_ja: '季節の生活',
    title_en: 'Seasonal Life & Customs',
    title_pt: 'Vida Sazonal',
    icon: '🌸',
    description: 'Japanese life follows the seasons. Knowing the rhythm helps you belong.',
    lessons: [
      {
        title: 'Year-Round Calendar',
        content: [
          { type: 'event', month: 'Jan 1-3', name: 'お正月 (Oshōgatsu)', what: 'New Year — everything closes. Visit shrines, eat おせち料理.' },
          { type: 'event', month: 'Mar-Apr', name: '花見 (Hanami)', what: 'Cherry blossom viewing — the most social time of year. Colleagues will invite you.' },
          { type: 'event', month: 'Jul-Aug', name: '夏祭り (Natsu Matsuri)', what: 'Summer festivals — fireworks, street food, yukata. Your town will have one. Go.' },
          { type: 'event', month: 'Dec 31', name: '大晦日 (Ōmisoka)', what: 'Eat 年越しそば (year-crossing noodles). Temple bells ring 108 times at midnight.' },
        ],
      },
    ],
  },
};

// ─── Fast Track methodology ───

export interface MethodologyPrinciple {
  principle: string;
  icon: string;
  from_ezoe: string;
  kip_talk_implementation: string;
  why_it_works: string;
}

export const METHODOLOGY_PRINCIPLES: MethodologyPrinciple[] = [
  {
    principle: 'Visual Grammar — See the Structure',
    icon: '🎨',
    from_ezoe: 'Juubako grammar cards use color and position to make Japanese SOV structure visible.',
    kip_talk_implementation: 'Color-coded sentence builder: blue=subject, red=object, green=verb. See the grammar.',
    why_it_works: 'Western learners struggle with SOV order. Making it visual bypasses the translation step.',
  },
  {
    principle: 'Speak First, Perfect Later',
    icon: '🗣️',
    from_ezoe: 'Students produce sentences from day 1. Fluency comes from doing, not studying about doing.',
    kip_talk_implementation: 'Daily speaking challenges. Record yourself saying 3 sentences. Don\'t wait until you "know enough."',
    why_it_works: 'Your brain builds speaking pathways by SPEAKING, not by memorizing rules.',
  },
  {
    principle: 'Chunk Learning — Phrases, Not Words',
    icon: '🧩',
    from_ezoe: 'SNG teaches おはようございます as one unit, not おはよう + ございます.',
    kip_talk_implementation: 'Every vocabulary item comes with a full sentence. Learn 「朝ごはんを食べます」 not just 「食べる」.',
    why_it_works: 'Your brain stores language in chunks. Phrases are retrieved as whole units.',
  },
  {
    principle: 'Spaced Repetition',
    icon: '📈',
    from_ezoe: 'VLJ digital platform revisits material at optimal intervals via Ebbinghaus forgetting curve.',
    kip_talk_implementation: 'Hard words appear more often. Review at 1, 3, 7, 14, 30 days.',
    why_it_works: 'Minimum effort for maximum retention — moves info from short-term to long-term memory.',
  },
  {
    principle: 'Daily 20 Minutes',
    icon: '📱',
    from_ezoe: '20 hrs/week classroom + daily VLJ self-study. Consistency beats intensity.',
    kip_talk_implementation: '20 min/day minimum. Short, daily, non-negotiable. Gaps of 3+ days reset progress.',
    why_it_works: 'Daily exposure keeps Japanese "warm" in your brain. 20min × 30 days = 10 hours/month.',
  },
  {
    principle: 'Real Situations',
    icon: '🏭',
    from_ezoe: 'Curriculum organized around real life: greetings, dining, shopping, phone calls.',
    kip_talk_implementation: 'Every phrase is workplace-relevant. "How to use this machine" > "The pen is on the table."',
    why_it_works: 'Your brain prioritizes survival information. Workplace phrases are stored faster and deeper.',
  },
];

// ─── Japanese → Other Languages (for Japanese residents helping foreigners) ───

export interface ReverseCourse {
  name_ja: string;
  name_en: string;
  icon: string;
  target_lang: string;
  target_flag: string;
  description: string;
  categories: {
    name: string;
    name_ja: string;
    vocabulary: {
      jp: string;
      target: string;
      romaji?: string;
      note?: string;
    }[];
  }[];
}

export const JP_TO_ENGLISH: ReverseCourse = {
  name_ja: '日本語→英語',
  name_en: 'Japanese → English',
  icon: '🇬🇧',
  target_lang: 'English',
  target_flag: '🇬🇧',
  description:
    'For Japanese municipal workers, careworkers, and residents who want to communicate with the growing foreign community. Learn the phrases that actually help — giving directions, explaining procedures, small emergencies.',
  categories: [
    {
      name: 'Greetings & Small Talk',
      name_ja: 'あいさつ・雑談',
      vocabulary: [
        { jp: 'こんにちは', target: 'Hello / Good afternoon', note: 'Most versatile greeting' },
        { jp: 'おはようございます', target: 'Good morning', note: 'Before ~10am' },
        { jp: 'どちらから来ましたか？', target: 'Where are you from?', note: 'Good icebreaker' },
        { jp: '日本の生活はどうですか？', target: 'How is life in Japan?', note: 'Shows you care' },
        { jp: '何かお手伝いしましょうか？', target: 'Can I help you with anything?' },
        { jp: 'ゆっくり話しますね', target: 'I\'ll speak slowly' },
        { jp: 'わかりましたか？', target: 'Do you understand?' },
        { jp: '大丈夫ですか？', target: 'Are you OK? / Is everything alright?' },
      ],
    },
    {
      name: 'City Hall / Ward Office',
      name_ja: '区役所・市役所で',
      vocabulary: [
        { jp: '住民票が必要です', target: 'You need a residence certificate (jūminhyō)' },
        { jp: 'この書類に記入してください', target: 'Please fill out this form' },
        { jp: 'パスポートを見せてください', target: 'Please show me your passport' },
        { jp: '在留カードはありますか？', target: 'Do you have your residence card?' },
        { jp: '14日以内に手続きしてください', target: 'Please complete this within 14 days' },
        { jp: '保険に入っていますか？', target: 'Do you have health insurance?' },
        { jp: 'こちらが保険証です', target: 'Here is your insurance card' },
        { jp: '税金について説明します', target: 'Let me explain about taxes' },
      ],
    },
    {
      name: 'Giving Directions',
      name_ja: '道案内',
      vocabulary: [
        { jp: 'まっすぐ行ってください', target: 'Go straight' },
        { jp: '次の信号を右に曲がって', target: 'Turn right at the next traffic light' },
        { jp: '左側にあります', target: 'It\'s on the left side' },
        { jp: '駅から歩いて5分です', target: 'It\'s 5 minutes walk from the station' },
        { jp: 'ここです', target: 'It\'s here (pointing on map)' },
        { jp: '何番のバスですか？', target: 'Which bus number?' },
        { jp: '終点まで乗ってください', target: 'Ride to the last stop' },
      ],
    },
    {
      name: 'Medical / Emergency',
      name_ja: '医療・緊急',
      vocabulary: [
        { jp: '救急車を呼びます', target: 'I\'ll call an ambulance' },
        { jp: 'どこが痛いですか？', target: 'Where does it hurt?' },
        { jp: '熱を測りましょう', target: 'Let\'s check your temperature' },
        { jp: 'アレルギーはありますか？', target: 'Do you have any allergies?' },
        { jp: '薬を飲んでいますか？', target: 'Are you taking any medication?' },
        { jp: '安静にしてください', target: 'Please rest' },
        { jp: '保険証を見せてください', target: 'Please show your insurance card' },
        { jp: '火事です！逃げてください！', target: 'Fire! Please evacuate!', note: '🚨 Emergency' },
        { jp: '地震です！机の下に入って！', target: 'Earthquake! Get under a desk!', note: '🫨 Emergency' },
      ],
    },
  ],
};

export const JP_TO_CHINESE: ReverseCourse = {
  name_ja: '日本語→中国語',
  name_en: 'Japanese → Chinese',
  icon: '🇨🇳',
  target_lang: 'Chinese (Mandarin)',
  target_flag: '🇨🇳',
  description:
    'For communicating with Chinese residents and tourists — the largest foreign group in Japan.',
  categories: [
    {
      name: 'Greetings & Basics',
      name_ja: '基本あいさつ',
      vocabulary: [
        { jp: 'こんにちは', target: '你好 (Nǐ hǎo)' },
        { jp: 'ありがとう', target: '谢谢 (Xièxiè)' },
        { jp: 'すみません', target: '对不起 (Duìbuqǐ)' },
        { jp: '大丈夫ですか？', target: '你没事吧？(Nǐ méishì ba?)' },
        { jp: 'わかりました', target: '我明白了 (Wǒ míngbái le)' },
        { jp: 'ゆっくり話してください', target: '请说慢一点 (Qǐng shuō màn yīdiǎn)' },
      ],
    },
    {
      name: 'Shopping & Payment',
      name_ja: '買い物・支払い',
      vocabulary: [
        { jp: '袋はいりますか？', target: '要袋子吗？(Yào dàizi ma?)' },
        { jp: '現金ですかカードですか？', target: '现金还是卡？(Xiànjīn háishì kǎ?)' },
        { jp: '免税ですか？', target: '免税吗？(Miǎnshuì ma?)' },
        { jp: 'レシートいりますか？', target: '要收据吗？(Yào shōujù ma?)' },
      ],
    },
  ],
};

export const JP_TO_KOREAN: ReverseCourse = {
  name_ja: '日本語→韓国語',
  name_en: 'Japanese → Korean',
  icon: '🇰🇷',
  target_lang: 'Korean',
  target_flag: '🇰🇷',
  description:
    'For communicating with Korean residents — the third-largest foreign community in Japan.',
  categories: [
    {
      name: 'Greetings & Basics',
      name_ja: '基本あいさつ',
      vocabulary: [
        { jp: 'こんにちは', target: '안녕하세요 (Annyeonghaseyo)' },
        { jp: 'ありがとう', target: '감사합니다 (Gamsahamnida)' },
        { jp: 'すみません', target: '죄송합니다 (Joesonghamnida)' },
        { jp: '大丈夫ですか？', target: '괜찮으세요? (Gwaenchaneuseyo?)' },
        { jp: 'わかりました', target: '알겠습니다 (Algesseumnida)' },
        { jp: 'ゆっくり話してください', target: '천천히 말씀해 주세요 (Cheoncheonhi malsseumhae juseyo)' },
      ],
    },
    {
      name: 'Helping Visitors',
      name_ja: '案内・手伝い',
      vocabulary: [
        { jp: 'ここです', target: '여기예요 (Yeogiyeyo)' },
        { jp: '何かお探しですか？', target: '뭐 찾으세요? (Mwo chajeuseyo?)' },
        { jp: 'お手伝いしましょうか？', target: '도와드릴까요? (Dowadeurilkkayo?)' },
        { jp: '道に迷いましたか？', target: '길을 잃으셨어요? (Gireul ireusyeosseoyo?)' },
      ],
    },
  ],
};

export const JP_TO_PORTUGUESE: ReverseCourse = {
  name_ja: '日本語→ポルトガル語',
  name_en: 'Japanese → Portuguese',
  icon: '🇧🇷',
  target_lang: 'Portuguese',
  target_flag: '🇧🇷',
  description:
    'For communicating with the large Brazilian community — especially in Aichi, Shizuoka, and Gunma.',
  categories: [
    {
      name: 'Greetings & Basics',
      name_ja: '基本あいさつ',
      vocabulary: [
        { jp: 'こんにちは', target: 'Olá / Bom dia' },
        { jp: 'ありがとう', target: 'Obrigado(a)' },
        { jp: 'すみません', target: 'Com licença / Desculpe' },
        { jp: '大丈夫ですか？', target: 'Você está bem?' },
        { jp: 'わかりました', target: 'Entendi' },
        { jp: 'ゆっくり話してください', target: 'Fale devagar, por favor' },
      ],
    },
    {
      name: 'Work & Documents',
      name_ja: '仕事・書類',
      vocabulary: [
        { jp: '書類にサインしてください', target: 'Assine o documento, por favor' },
        { jp: 'パスポートありますか？', target: 'Você tem passaporte?' },
        { jp: 'ここに名前を書いてください', target: 'Escreva seu nome aqui' },
        { jp: '仕事は何ですか？', target: 'Qual é o seu trabalho?' },
        { jp: '給料日は25日です', target: 'O dia de pagamento é dia 25' },
      ],
    },
  ],
};

export function getAllReverseCourses(): ReverseCourse[] {
  return [JP_TO_ENGLISH, JP_TO_CHINESE, JP_TO_KOREAN, JP_TO_PORTUGUESE];
}

export interface TrainingManual {
  title_ja: string;
  title_en: string;
  subtitle: string;
  icon: string;
  chapters: TrainingChapter[];
}

export interface TrainingChapter {
  title_ja: string;
  title_en: string;
  sections: TrainingSection[];
}

export interface TrainingSection {
  heading: string;
  content: string;
  type: 'info' | 'do' | 'dont' | 'phrase' | 'warning' | 'checklist';
  jp?: string;
  target?: string;
}

// ─── Medical Clerk Training Manual ───

export const MEDICAL_CLERK_MANUAL: TrainingManual = {
  title_ja: '外国人医療事務スタッフのための実践マニュアル',
  title_en: 'Medical Clerk Training Manual for Foreign Workers',
  subtitle: 'Working in a Japanese Clinic with Desk Koda Workstation',
  icon: '🏥',
  chapters: [
    {
      title_ja: '第1章: 日本の医療機関のしくみ',
      title_en: 'Chapter 1: How Japanese Clinics Work',
      sections: [
        {
          heading: 'The Japanese Healthcare System at a Glance',
          content: 'Japan has universal healthcare. Every resident has a health insurance card (保険証). Patients can visit any clinic — no referral needed for most specialties. Clinics are typically small, doctor-owned, with 3-8 staff. You work closely with everyone.',
          type: 'info',
        },
        {
          heading: 'Types of Medical Facilities',
          content: 'クリニック (clinic) = small, outpatient only, 1-2 doctors. 病院 (hospital) = larger, inpatient beds, multiple departments. 診療所 = small clinic (legal term). Most foreign medical clerks work in clinics.',
          type: 'info',
        },
        {
          heading: 'The Daily Flow',
          content: 'Morning huddle → patient check-in → appointments → examinations → billing → cleaning. Clinics run on precise schedules. 9:00 start means 8:45 ready at your desk. Afternoon break 12:00-15:00 is common. Evening shift runs 15:00-19:00.',
          type: 'info',
        },
      ],
    },
    {
      title_ja: '第2章: 医療事務の基本',
      title_en: 'Chapter 2: Medical Clerk Fundamentals',
      sections: [
        {
          heading: 'Your Core Responsibilities',
          content: '1) Reception & patient greeting 2) Insurance card verification 3) Appointment scheduling 4) Medical record preparation 5) Billing & receipt creation (レセプト) 6) Phone handling 7) Cleaning & supply management',
          type: 'checklist',
        },
        {
          heading: 'Insurance Card (保険証) — The Most Important Document',
          content: 'Every patient hands you their 保険証. You must: check it\'s valid (not expired), verify the patient name matches, confirm the insurance type (社会保険/国民健康保険/後期高齢者), and return it promptly. Never lose an insurance card.',
          type: 'warning',
        },
        {
          heading: 'Patient Registration Flow',
          content: '1) Greet: いらっしゃいませ 2) Ask: 初診ですか？(First visit?) 3) If yes: hand them 問診票 (intake form) 4) Collect: 保険証 5) Verify: name, DOB, address 6) Enter into Desk Koda 7) Direct to waiting area: おかけになってお待ちください',
          type: 'checklist',
        },
        {
          heading: 'Key Phrases at Reception',
          content: 'Master these 5 phrases and you can handle 80% of reception:',
          type: 'phrase', jp: 'いらっしゃいませ', target: 'Welcome (standard clinic greeting)',
        },
        {
          heading: '',
          content: '',
          type: 'phrase', jp: '保険証をお預かりします', target: 'I\'ll hold your insurance card',
        },
        {
          heading: '',
          content: '',
          type: 'phrase', jp: '少々お待ちください', target: 'Please wait a moment',
        },
        {
          heading: '',
          content: '',
          type: 'phrase', jp: 'こちらへどうぞ', target: 'This way please',
        },
        {
          heading: '',
          content: '',
          type: 'phrase', jp: 'お大事に', target: 'Take care (said when patient leaves)',
        },
      ],
    },
    {
      title_ja: '第3章: Desk Kodaを使った業務',
      title_en: 'Chapter 3: Working with Desk Koda',
      sections: [
        {
          heading: 'Starting Your Shift',
          content: '1) Log into Desk Koda 2) Check Today dashboard for: today\'s appointments, pending approvals, system status (ORCA, MyNumber, FAX — all should show green) 3) Review any overnight messages 4) Confirm the 担当 (person in charge) display shows your name',
          type: 'checklist',
        },
        {
          heading: 'Using the Reception Screen',
          content: 'The Reception cockpit shows: patient queue, current patient details, insurance verification status, AI-suggested documentation, quick actions. When a patient arrives, click their appointment or create a walk-in entry. The AI assistant (right panel) suggests documents and flags missing information.',
          type: 'info',
        },
        {
          heading: 'Approvals & Verifier Moat',
          content: 'Desk Koda\'s safety layer: every AI-generated document must be approved by a human. The Approvals queue shows pending items with risk levels. Green = low risk, yellow = review recommended, red = must review. Never auto-approve red items. This is a legal safety requirement.',
          type: 'warning',
        },
        {
          heading: 'Japanese Training Panel',
          content: 'During quiet periods, use the 📖 日本語トレーニング tab. 20 minutes a day = conversational Japanese in 6 months. Focus on the 🏥 Caregiving tab first — it has exactly the vocabulary you need for clinic work.',
          type: 'do',
        },
      ],
    },
    {
      title_ja: '第4章: 患者さんとのコミュニケーション',
      title_en: 'Chapter 4: Communicating with Patients',
      sections: [
        {
          heading: 'The Patient is 患者様 (kanja-sama)',
          content: 'Always use 様 (sama) not さん (san) for patients. Always. This is non-negotiable in Japanese healthcare. The patient is always 患者様, never 患者さん. Using さん with a patient signals poor training.',
          type: 'warning',
        },
        {
          heading: 'Elderly Patients — Special Care',
          content: 'Many patients are elderly (高齢者). Speak slowly and clearly. Face them when speaking. Use 敬語 (keigo) at all times. Offer physical assistance: お手伝いしましょうか？ If they seem confused about payment or medication, gently explain — never rush them.',
          type: 'do',
        },
        {
          heading: 'Handling Difficult Situations',
          content: 'If a patient is upset: 1) Stay calm 2) Apologize for the inconvenience: ご迷惑をおかけして申し訳ございません 3) Listen fully before responding 4) If you can\'t resolve it, say: 少々お待ちください、上司を呼びます (I\'ll call my supervisor) 5) Never argue — call the senior staff',
          type: 'do',
        },
        {
          heading: 'What Patients Expect from You',
          content: 'Politeness > speed. Accuracy > efficiency. Cleanliness at all times. Never chew gum, never use your phone, never have visible tattoos (cover them), keep nails short and clean. White coat or clean uniform every day.',
          type: 'dont',
        },
      ],
    },
    {
      title_ja: '第5章: お金と保険のしくみ',
      title_en: 'Chapter 5: Money, Insurance & Billing',
      sections: [
        {
          heading: 'Japanese Medical Billing — The Basics',
          content: 'Japan uses a point system (点数). Every medical procedure has a fixed national price in points. 1 point = 10 yen. The patient pays 10-30% depending on age and income. The clinic bills the insurance system for the rest.',
          type: 'info',
        },
        {
          heading: 'Patient Payment at the Counter',
          content: '1) Call the patient: [name]様、お会計です 2) Show the amount clearly 3) Take payment 4) Give receipt (領収書) 5) Return insurance card 6) If next appointment needed: 次回の予約はいかがですか？ 7) Close: お大事に',
          type: 'checklist',
        },
        {
          heading: 'Common Billing Mistakes to Avoid',
          content: 'Never charge without verifying insurance first. Never give medical advice about costs (say: 医師にご確認ください). Never discuss one patient\'s bill where others can hear. Never round amounts — exact change only.',
          type: 'warning',
        },
        {
          heading: 'レセプト (Receipt) — The Monthly Claim',
          content: 'At month-end, clinics submit レセプト (medical fee receipts) to the insurance system. Desk Koda auto-generates draft レセプト from the day\'s records. The Approvals queue will show them for review. Check: patient name, insurance number, procedure codes, point totals.',
          type: 'info',
        },
      ],
    },
    {
      title_ja: '第6章: 職場の人間関係',
      title_en: 'Chapter 6: Workplace Relationships',
      sections: [
        {
          heading: 'Hierarchy in the Clinic',
          content: '院長 (clinic director/doctor) → 看護師長 (head nurse) → 看護師 (nurses) → 医療事務 (clerks). As a medical clerk, you report to the head nurse or office manager. The doctor is at the top — always use 先生 (sensei).',
          type: 'info',
        },
        {
          heading: 'Hōrensō (報連相) in Daily Practice',
          content: 'Report (報告) — tell your supervisor immediately when: a patient complains, insurance is invalid, the system shows an error, you make a mistake. Inform (連絡) — tell relevant people when: appointments change, supplies are low, you\'ll be absent. Consult (相談) — ask before: changing any procedure, handling unusual payments, speaking to difficult patients.',
          type: 'do',
        },
        {
          heading: 'Morning Greetings — Critical',
          content: 'Say おはようございます to EVERY person when you arrive. To the doctor: deeper bow. To colleagues: regular bow. To patients: いらっしゃいませ. This isn\'t optional — skipping greetings is considered rude and unprofessional.',
          type: 'warning',
        },
        {
          heading: 'Cleaning is Everyone\'s Job',
          content: 'Japanese clinics have no dedicated cleaners. Everyone cleans — including the doctor. At closing time, you will be expected to: wipe counters, empty trash, clean the waiting area, restock supplies. Join without being asked. This is part of the job.',
          type: 'do',
        },
      ],
    },
    {
      title_ja: '第7章: 緊急時の対応',
      title_en: 'Chapter 7: Emergency Procedures',
      sections: [
        {
          heading: 'Medical Emergency in the Clinic',
          content: 'If a patient collapses or shows severe symptoms: 1) Call for the doctor immediately: 先生！緊急です！ 2) If instructed, call 119: 救急車をお願いします。住所は[address]です。 3) Clear the area 4) Stay calm — patients watch your reaction',
          type: 'checklist',
        },
        {
          heading: 'Fire & Earthquake',
          content: 'Fire: activate alarm, call 119, guide patients outside. Know your evacuation route and meeting point. Earthquake: 机の下に入って (get under desks), stay away from windows, do not run outside during shaking. After shaking stops, follow senior staff instructions.',
          type: 'warning',
        },
        {
          heading: 'System Failure',
          content: 'If Desk Koda or ORCA goes down: 1) Report immediately to supervisor 2) Switch to paper forms (keep blank forms accessible) 3) Continue receiving patients manually 4) Enter data when system recovers. Never turn patients away due to system issues.',
          type: 'info',
        },
      ],
    },
  ],
};

// ─── New Industries: Konbini, Hotels, Clinics, Retail, Logistics ───

export const KONBINI_COURSE: IndustryCourse = {
  name_ja: 'コンビニ',
  name_en: 'Convenience Store (Konbini) Japanese',
  name_pt: 'Japonês para Loja de Conveniência',
  description: 'Essential Japanese for working at コンビニ — Japan\'s 55,000 convenience stores employ many foreign workers.',
  icon: '🏪',
  categories: [
    {
      name: 'Cash Register Phrases',
      vocabulary: [
        { jp: 'いらっしゃいませ', romaji: 'irasshaimase', en: 'Welcome!', note: 'Say to EVERY customer, always' },
        { jp: '袋お付けしますか', romaji: 'fukuro o tsukemasu ka', en: 'Would you like a bag?' },
        { jp: '温めますか', romaji: 'atatamemasu ka', en: 'Shall I heat this?', note: 'For bento, onigiri, fried foods' },
        { jp: '箸お付けしますか', romaji: 'hashi o tsukemasu ka', en: 'Would you like chopsticks?' },
        { jp: 'スプーンお付けしますか', romaji: 'supūn o tsukemasu ka', en: 'Would you like a spoon?' },
        { jp: 'ポイントカードお持ちですか', romaji: 'pointo kādo omochi desu ka', en: 'Do you have a loyalty card?' },
        { jp: '[amount]円になります', romaji: '[amount] en ni narimasu', en: 'That will be [amount] yen' },
        { jp: 'ありがとうございました', romaji: 'arigatō gozaimashita', en: 'Thank you very much!', note: 'Say to EVERY customer when they leave' },
        { jp: 'お釣りです', romaji: 'otsuri desu', en: 'Here is your change' },
        { jp: 'レジ袋有料です', romaji: 'reji bukuro yūryō desu', en: 'Plastic bags are charged' },
      ],
    },
    {
      name: 'Store Operations',
      vocabulary: [
        { jp: '品出し', romaji: 'shinadashi', en: 'Restocking shelves' },
        { jp: '前出し', romaji: 'maedashi', en: 'Front-facing (pulling items forward)' },
        { jp: '廃棄', romaji: 'haiki', en: 'Disposal (expired items)', note: 'Check dates carefully' },
        { jp: '検品', romaji: 'kenpin', en: 'Inspection of delivered goods' },
        { jp: 'レジ締め', romaji: 'reji shime', en: 'Closing the register (end of shift)' },
        { jp: '両替お願いします', romaji: 'ryōgae onegai shimasu', en: 'Please change money (for register)' },
        { jp: '公共料金', romaji: 'kōkyō ryōkin', en: 'Utility bill payment', note: 'Customers pay bills at konbini' },
        { jp: '宅急便', romaji: 'takkyūbin', en: 'Courier/delivery service', note: 'Konbini handle parcels too' },
      ],
    },
  ],
};

export const HOTEL_COURSE: IndustryCourse = {
  name_ja: 'ホテル・旅館',
  name_en: 'Hotel & Ryokan Japanese',
  name_pt: 'Japonês para Hotelaria',
  description: 'For front desk, housekeeping, and service staff at Japan\'s hotels, ryokan, and minshuku.',
  icon: '🏨',
  categories: [
    {
      name: 'Front Desk — Check-in',
      vocabulary: [
        { jp: 'いらっしゃいませ', romaji: 'irasshaimase', en: 'Welcome' },
        { jp: 'ご予約のお名前は？', romaji: 'goyoyaku no onamae wa?', en: 'What name is the reservation under?' },
        { jp: 'パスポートをお預かりします', romaji: 'pasupōto o oazukari shimasu', en: 'I\'ll hold your passport (copy required by law)' },
        { jp: 'ご宿泊カードにご記入ください', romaji: 'goshukuhaku kādo ni gokinyū kudasai', en: 'Please fill out the guest registration card' },
        { jp: 'お部屋は[number]号室です', romaji: 'oheya wa [number] gōshitsu desu', en: 'Your room is number [number]' },
        { jp: 'Wi-Fiのパスワードはこちらです', romaji: 'Wi-Fi no pasuwādo wa kochira desu', en: 'Here is the Wi-Fi password' },
        { jp: '朝食は7時からです', romaji: 'chōshoku wa shichiji kara desu', en: 'Breakfast is from 7:00' },
        { jp: 'チェックアウトは11時です', romaji: 'chekkuauto wa jūichiji desu', en: 'Check-out is at 11:00' },
      ],
    },
    {
      name: 'Housekeeping',
      vocabulary: [
        { jp: 'お部屋の清掃に参りました', romaji: 'oheya no seisō ni mairimashita', en: 'I\'ve come to clean your room' },
        { jp: 'タオル交換', romaji: 'taoru kōkan', en: 'Towel change' },
        { jp: 'シーツ交換', romaji: 'shītsu kōkan', en: 'Sheet change' },
        { jp: 'アメニティ', romaji: 'ameniti', en: 'Amenities (toothbrush, razor, etc.)' },
        { jp: 'ゴミ捨て', romaji: 'gomi sute', en: 'Trash disposal' },
        { jp: '忘れ物', romaji: 'wasuremono', en: 'Lost item / Forgotten item' },
      ],
    },
    {
      name: 'Guest Services',
      vocabulary: [
        { jp: 'タクシー呼びますか', romaji: 'takushī yobimasu ka', en: 'Shall I call a taxi?' },
        { jp: 'お荷物お持ちします', romaji: 'onimotsu omochi shimasu', en: 'Let me carry your luggage' },
        { jp: '近くにコンビニがあります', romaji: 'chikaku ni konbini ga arimasu', en: 'There\'s a convenience store nearby' },
        { jp: '大浴場は[time]時までです', romaji: 'daiyokujō wa [time] ji made desu', en: 'The public bath is open until [time]' },
        { jp: 'ごゆっくりどうぞ', romaji: 'goyukkuri dōzo', en: 'Please relax and enjoy your stay' },
      ],
    },
  ],
};

export const CLINIC_COURSE: IndustryCourse = {
  name_ja: 'クリニック・病院',
  name_en: 'Clinic & Hospital Japanese',
  name_pt: 'Japonês para Clínicas',
  description: 'Beyond caregiving — vocabulary for clinic reception, pharmacy, and dental staff.',
  icon: '🏥',
  categories: [
    {
      name: 'Reception Desk',
      vocabulary: [
        { jp: '診察券お持ちですか', romaji: 'shinsatsuken omochi desu ka', en: 'Do you have your patient card?' },
        { jp: '本日はどうなさいましたか', romaji: 'honjitsu wa dō nasaimashita ka', en: 'What brings you in today? (polite)' },
        { jp: '検温お願いします', romaji: 'kenon onegai shimasu', en: 'Please have your temperature checked' },
        { jp: '順番にお呼びします', romaji: 'junban ni oyobi shimasu', en: 'We\'ll call you in order' },
        { jp: '診察の前に問診票を', romaji: 'shinsatsu no mae ni monshinhyō o', en: 'Please fill this intake form before the exam' },
        { jp: 'お薬手帳お持ちですか', romaji: 'okusuri techō omochi desu ka', en: 'Do you have your medication notebook?' },
      ],
    },
    {
      name: 'Pharmacy Counter',
      vocabulary: [
        { jp: 'お薬出ます', romaji: 'okusuri demasu', en: 'Your medication is ready' },
        { jp: '食後に飲んでください', romaji: 'shokugo ni nonde kudasai', en: 'Take after meals' },
        { jp: '1日3回', romaji: 'ichinichi sankai', en: '3 times a day' },
        { jp: '副作用', romaji: 'fukusayō', en: 'Side effects' },
        { jp: '飲み合わせ', romaji: 'nomiawase', en: 'Drug interaction check' },
      ],
    },
    {
      name: 'Dental Clinic',
      vocabulary: [
        { jp: '歯科', romaji: 'shika', en: 'Dentistry / Dental clinic' },
        { jp: '虫歯', romaji: 'mushiba', en: 'Cavity / Tooth decay' },
        { jp: '歯石除去', romaji: 'shiseki jokyo', en: 'Tartar removal / Scaling' },
        { jp: 'レントゲン撮ります', romaji: 'rentogen torimasu', en: 'I\'ll take an X-ray' },
        { jp: '口をゆすいでください', romaji: 'kuchi o yusuide kudasai', en: 'Please rinse your mouth' },
      ],
    },
  ],
};

export const RETAIL_COURSE: IndustryCourse = {
  name_ja: '小売・販売',
  name_en: 'Retail & Sales Japanese',
  name_pt: 'Japonês para Varejo',
  description: 'For department stores, boutiques, electronics shops, and general retail.',
  icon: '🛍️',
  categories: [
    {
      name: 'Customer Service',
      vocabulary: [
        { jp: 'いらっしゃいませ', romaji: 'irasshaimase', en: 'Welcome to the store' },
        { jp: '何かお探しですか', romaji: 'nanika osagashi desu ka', en: 'Are you looking for something?' },
        { jp: '試着されますか', romaji: 'shichaku saremasu ka', en: 'Would you like to try it on?' },
        { jp: 'サイズお持ちしましょうか', romaji: 'saizu omochi shimashō ka', en: 'Shall I bring you another size?' },
        { jp: '少々お待ちください', romaji: 'shōshō omachi kudasai', en: 'Please wait a moment' },
        { jp: 'こちらでよろしいですか', romaji: 'kochira de yoroshii desu ka', en: 'Is this one alright?' },
      ],
    },
    {
      name: 'Payment & Returns',
      vocabulary: [
        { jp: 'お会計[amount]円です', romaji: 'okaikei [amount] en desu', en: 'Your total is [amount] yen' },
        { jp: 'クレジットカードお使いになれます', romaji: 'kurejitto kādo otsukai ni naremasu', en: 'You can use credit card' },
        { jp: '免税手続き', romaji: 'menzei tetsuzuki', en: 'Tax-free procedure', note: 'For tourists spending ¥5,000+' },
        { jp: '返品・交換', romaji: 'henpin / kōkan', en: 'Return / Exchange' },
        { jp: '領収書', romaji: 'ryōshūsho', en: 'Receipt', note: 'Different from register receipt' },
        { jp: '包装お包みします', romaji: 'hōsō otsutsumi shimasu', en: 'I\'ll wrap it for you' },
      ],
    },
  ],
};

export const LOGISTICS_COURSE: IndustryCourse = {
  name_ja: '物流・配送',
  name_en: 'Logistics & Delivery Japanese',
  name_pt: 'Japonês para Logística',
  description: 'For warehouse workers, delivery drivers, and logistics staff.',
  icon: '📦',
  categories: [
    {
      name: 'Warehouse',
      vocabulary: [
        { jp: '入庫', romaji: 'nyūko', en: 'Incoming stock / Receiving' },
        { jp: '出庫', romaji: 'shukko', en: 'Outgoing stock / Shipping' },
        { jp: '棚卸し', romaji: 'tanaoroshi', en: 'Inventory count' },
        { jp: 'ピッキング', romaji: 'pikingu', en: 'Picking (selecting items for orders)' },
        { jp: 'フォークリフト', romaji: 'fōkurifuto', en: 'Forklift' },
        { jp: '注意：頭上注意', romaji: 'chūi: zujō chūi', en: 'Caution: Watch your head' },
      ],
    },
    {
      name: 'Delivery',
      vocabulary: [
        { jp: 'お届け物です', romaji: 'otodokemono desu', en: 'I have a delivery for you' },
        { jp: 'サインお願いします', romaji: 'sain onegai shimasu', en: 'Please sign here' },
        { jp: '不在票', romaji: 'fuzaihyō', en: 'Missed delivery notice', note: 'You\'ll leave many of these' },
        { jp: '再配達', romaji: 'saihaitatsu', en: 'Re-delivery' },
        { jp: '置き配', romaji: 'okihai', en: 'Leave-at-door delivery' },
        { jp: '着払い', romaji: 'chakubarai', en: 'Cash on delivery (COD)' },
      ],
    },
  ],
};

// ─── Export helpers ───

export function getDailyLifeVocabulary() { return DAILY_LIFE_COURSE; }
export function getCaregivingVocabulary() { return CAREGIVING_COURSE; }
export function getCommonWorkplace() { return COMMON_WORKPLACE; }
export function getKonbiniVocabulary() { return KONBINI_COURSE; }
export function getHotelVocabulary() { return HOTEL_COURSE; }
export function getClinicVocabulary() { return CLINIC_COURSE; }
export function getRetailVocabulary() { return RETAIL_COURSE; }
export function getLogisticsVocabulary() { return LOGISTICS_COURSE; }
export function getMedicalClerkManual() { return MEDICAL_CLERK_MANUAL; }

export function getAllVocabulary() {
  return [DAILY_LIFE_COURSE, COMMON_WORKPLACE, CAREGIVING_COURSE,
    KONBINI_COURSE, HOTEL_COURSE, CLINIC_COURSE, RETAIL_COURSE, LOGISTICS_COURSE];
}

export function getAllCultureModules() {
  return Object.entries(CULTURE_MODULES_TS).map(([id, mod]) => ({ id, ...mod }));
}

export function getAllTaboos() {
  const taboos: { text: string; severity: string; module: string }[] = [];
  for (const mod of Object.values(CULTURE_MODULES_TS)) {
    for (const lesson of mod.lessons) {
      for (const item of lesson.content) {
        if (item.type === 'dont' && item.text) {
          taboos.push({ text: item.text, severity: item.severity || 'medium', module: mod.title_en });
        }
      }
    }
  }
  return taboos;
}
