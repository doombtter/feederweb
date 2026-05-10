export const SITE = {
  name: 'Feeder',
  nameKo: '피더',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feeder.siflab.org',
  parentUrl: 'https://siflab.org',
  parentName: 'siflab',
  description:
    '피더(Feeder) — 익명으로 만나는 새로운 친구. 가벼운 피드, 음성/영상 채팅, 랜덤통화로 통하는 사람과 자연스럽게 연결되는 익명소셜 앱.',
  tagline: '오늘, 새로운 친구를 만나는 가장 가벼운 방법',
  contactEmail: 'hello@siflab.org',
  iosUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? 'https://apps.apple.com/kr/app/id6762005626',
  androidUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    'https://play.google.com/store/apps/details?id=com.feeder.feeder',
  termsUrl: 'https://feeder-dc220.web.app/terms.html',
  privacyUrl: 'https://feeder-dc220.web.app/privacy.html',
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

// 실제 스토어 URL이 항상 존재하므로 다운로드 배지는 항상 활성화
export const STORE_RELEASED = true;
