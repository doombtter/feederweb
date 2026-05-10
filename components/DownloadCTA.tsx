'use client';

import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { StoreBadges } from '@/components/StoreBadges';

export function DownloadCTA() {
  return (
    <section id="download" className="section">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-400 to-accent-500 px-8 py-14 text-white shadow-soft sm:px-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-12 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-90">Get Feeder</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                지금 바로 시작해보세요
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/90 sm:text-lg">
                무료 다운로드로 가벼운 익명소셜의 매력을 만나보세요. 안전한 환경에서, 통하는 친구와.
              </p>
              <div className="mt-7">
                <StoreBadges variant="light" />
              </div>
            </div>
            <div className="lg:col-span-4">
              <div
                aria-label="모바일에서 다운로드를 위한 QR 코드 자리"
                className="mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-2xl bg-white/15 text-center text-xs text-white/90 backdrop-blur"
              >
                <QrCode className="h-16 w-16" aria-hidden />
                <span className="mt-2">QR 코드<br />출시 후 제공</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
