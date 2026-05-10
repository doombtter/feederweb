import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Feeder - 가볍게 시작하는 랜덤채팅, 익명으로 새친구 만들기',
    template: '%s | Feeder',
  },
  description: SITE.description,
  keywords: [
    '랜챗',
    '랜덤채팅',
    '익명채팅',
    '익명소셜',
    '새친구 만들기',
    '랜덤매칭',
    '모르는사람과 대화',
    '안전한 랜덤채팅',
    '무료 익명채팅',
  ],
  authors: [{ name: 'siflab', url: SITE.parentUrl }],
  creator: 'siflab',
  publisher: 'siflab',
  openGraph: {
    title: 'Feeder - 랜챗 · 랜덤채팅 · 익명소셜 앱',
    description: SITE.tagline,
    url: SITE.url,
    siteName: 'Feeder',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Feeder - 랜덤채팅 익명소셜 앱' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feeder - 가볍게 시작하는 랜덤채팅',
    description: SITE.tagline,
    images: ['/og-image.png'],
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
  category: 'Social',
};

export const viewport: Viewport = {
  themeColor: '#FF6B5C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased">
        {children}
        <JsonLd />
        <GoogleAnalytics gaId={SITE.gaId} />
      </body>
    </html>
  );
}
