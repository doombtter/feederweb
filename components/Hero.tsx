'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { StoreBadges } from '@/components/StoreBadges';
import { PhoneMock } from '@/components/PhoneMock';
import { events } from '@/lib/analytics';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div className="container-page grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <p className="h-eyebrow">랜챗 · 랜덤채팅 · 익명소셜</p>
          <h1 className="h-display mt-3">
            오늘, 새로운 친구를 만나는
            <br />
            <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
              가장 가벼운 방법
            </span>
          </h1>
          <p className="text-body mt-6 max-w-xl">
            부담 없이 시작하는 랜덤 친구 만들기, <strong className="text-ink-900">Feeder</strong>.
            전화번호 없이 닉네임 하나로, 취향이 맞는 사람과 자연스럽게 대화해보세요.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <StoreBadges />
            <a
              href="#how"
              onClick={() => events.ctaHeroClick()}
              className="inline-flex items-center gap-2 self-start text-sm font-semibold text-ink-700 hover:text-ink-900"
            >
              어떻게 시작하나요? <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-6 text-sm text-ink-500">
            <div>
              <dt className="font-semibold text-ink-900">100% 무료</dt>
              <dd>다운로드 · 매칭 · 대화 모두 무료</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">전화번호 불필요</dt>
              <dd>닉네임 하나로 즉시 시작</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-900">안전한 환경</dt>
              <dd>신고/차단 즉시 반영</dd>
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
            <PhoneMock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
