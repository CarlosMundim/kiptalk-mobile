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

// ─── Export helpers ───

export function getDailyLifeVocabulary() {
  return DAILY_LIFE_COURSE;
}

export function getCaregivingVocabulary() {
  return CAREGIVING_COURSE;
}

export function getCommonWorkplace() {
  return COMMON_WORKPLACE;
}

export function getAllVocabulary() {
  return [DAILY_LIFE_COURSE, COMMON_WORKPLACE, CAREGIVING_COURSE];
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
