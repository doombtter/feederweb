'use client';

import { Apple, Play } from 'lucide-react';
import { SITE } from '@/lib/site';
import { events } from '@/lib/analytics';

type Variant = 'default' | 'light';

export function StoreBadges({ variant = 'default' }: { variant?: Variant }) {
  const baseLight =
    'inline-flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20';
  const baseDark =
    'inline-flex items-center gap-3 rounded-2xl border border-ink-600 bg-ink-800 px-5 py-3 text-ink-100 transition hover:bg-ink-700';
  const className = variant === 'light' ? baseLight : baseDark;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={SITE.iosUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store에서 피더(Feeder) 다운로드"
        onClick={() => events.downloadClick('ios')}
        className={className}
      >
        <Apple className="h-7 w-7" aria-hidden />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-80">Download on the</span>
          <span className="text-base font-semibold">App Store</span>
        </span>
      </a>
      <a
        href={SITE.androidUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play에서 피더(Feeder) 다운로드"
        onClick={() => events.downloadClick('android')}
        className={className}
      >
        <Play className="h-7 w-7" aria-hidden />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wider opacity-80">GET IT ON</span>
          <span className="text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
