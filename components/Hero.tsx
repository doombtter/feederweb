'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { StoreBadges } from '@/components/StoreBadges';
import { PhoneMock } from '@/components/PhoneMock';
import { events } from '@/lib/analytics';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
      />
      <div className="container-page grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="h-eyebrow">랜덤채팅 · 익명소셜 · 랜덤통화</p>
          <h1 className="h-display mt-3">
            오늘, 새로운 친구를 만나는
            <br />
            <span className="bg-gradient-to-r from-brand-400 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              가장 가벼운 방법
            </span>
          </h1>
          <p className="text-body mt-6 max-w-xl">
            <strong className="text-ink-100">피더(Feeder)</strong>는 100% 익명으로 운영되는 새로운 익명소셜 앱입니다.
            짧은 글, 1회만 보이는 시크릿 사진/영상, 음성·영상 채팅, 그리고 최대 10분 랜덤 통화까지 가볍게.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <StoreBadges />
            <a
              href="#how"
              onClick={() => events.ctaHeroClick()}
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-ink-200 hover:text-ink-100"
            >
              어떻게 시작하나요? <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-6 text-sm text-ink-300">
            <div>
              <dt className="font-semibold text-ink-100">100% 익명</dt>
              <dd>닉네임은 매칭과 무관</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-100">음성 · 영상</dt>
              <dd>채팅 · 랜덤통화(최대 10분) · 24시간 샷</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-100">안전한 환경</dt>
              <dd>전화번호 인증 · 만 19세 이상</dd>
            </div>
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-5"
        >
          <div className="animate-floaty">
            <PhoneMock variant="feed" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
