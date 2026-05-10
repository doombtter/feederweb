export const SITE = {
  name: 'Feeder',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://feeder.siflab.org',
  parentUrl: 'https://siflab.org',
  parentName: 'siflab',
  description:
    '랜챗, 랜덤채팅, 익명소셜의 새로운 기준. Feeder에서 부담 없이 새로운 친구를 만나보세요. 무료 다운로드.',
  tagline: '오늘, 새로운 친구를 만나는 가장 가벼운 방법',
  contactEmail: 'hello@siflab.org',
  iosUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? '#',
  androidUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '#',
  gaId: process.env.NEXT_PUBLIC_GA_ID,
};

export const STORE_RELEASED =
  Boolean(process.env.NEXT_PUBLIC_APP_STORE_URL) ||
  Boolean(process.env.NEXT_PUBLIC_PLAY_STORE_URL);
