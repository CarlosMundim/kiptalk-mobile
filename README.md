# KipTalk — Japanese for Life 🇯🇵

**Free forever.** Learn Japanese through the lens of living in Japan — not a language app, a survival tool.

## What it is
- **For foreign residents** — supermarket, city hall, doctor, neighbors, trains
- **For foreign workers** — workplace phrases, hōrensō, caregiving Japanese
- **For everyone** — WA culture, taboos, seasonal life, the Ezoe Method

Built for municipalities to distribute to foreign residents. No ads, no subscriptions, no data collection.

## Platforms
| Platform | Status |
|----------|--------|
| Web (Vercel) | ✅ Live |
| iOS | 📱 EAS Build |
| Android | 📱 EAS Build |

## Stack
- **Expo SDK 54** — React Native for iOS, Android, Web
- **Expo Router v4** — File-based routing
- **TypeScript** strict
- **Static export** for Vercel hosting

## Content
- 🏠 **Daily Life** (55+ words) — Shopping, city hall, doctor, neighbors, bank, trains
- 🏢 **Workplace** (30+ words) — Safety, instructions, caregiving-specific
- 🫂 **WA Culture** (350+ lessons) — Harmony, communication, seasonal, taboos
- ⚡ **Method** (6 principles) — Ezoe Method from Shinjuku Japanese Language Institute
- ⚠️ **Taboos** (20+) — What will get you fired, evicted, or arrested

## Development

```bash
npm install
npx expo start        # Dev server
npx expo start --web  # Web only
npx expo export --platform web  # Static export for Vercel
```

## Deployment

### Vercel
```bash
npx expo export --platform web
# Deploy dist/ to Vercel
```

### iOS / Android
```bash
npx eas build --platform ios --profile production
npx eas build --platform android --profile production
npx eas submit --platform ios
npx eas submit --platform android
```

## License
CC BY-NC-ND 4.0 — Free to use and share. Not for commercial use. No derivatives.

## Credits
- **Ezoe Method** — 新宿日本語学校 (Shinjuku Japanese Language Institute), 40+ years of accelerated Japanese pedagogy
- **KipTalk** — Built by KoLo Intelligence Labs for foreign residents and workers in Japan
- **KODA KENKŌ** — Train alongside the Medical Clerk Workstation for careworkers
