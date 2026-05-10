import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: '피더(Feeder) - 익명소셜·랜덤채팅·랜덤통화로 가볍게 새친구 만들기',
    template: '%s | Feeder',
  },
  description: SITE.description,
  keywords: [
    '피더',
    'Feeder',
    '랜챗',
    '랜덤채팅',
    '랜덤통화',
    '익명채팅',
    '익명소셜',
    '새친구 만들기',
    '랜덤매칭',
    '모르는사람과 대화',
    '음성 채팅',
    '영상 채팅',
    '안전한 랜덤채팅',
    '무료 익명채팅',
  ],
  authors: [{ name: 'siflab', url: SITE.parentUrl }],
  creator: 'siflab',
  publisher: 'siflab',
  openGraph: {
    title: '피더(Feeder) - 랜덤채팅 · 익명소셜 · 랜덤통화 앱',
    description: SITE.tagline,
    url: SITE.url,
    siteName: 'Feeder',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '피더(Feeder) - 가볍게 시작하는 익명소셜',
    description: SITE.tagline,
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  category: 'Social',
};

export const viewport: Viewport = {
  themeColor: '#8B5CF6',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-ink-950 font-sans text-ink-100 antialiased">
        {children}
        <JsonLd />
        <GoogleAnalytics gaId={SITE.gaId} />
      </body>
    </html>
  );
}
