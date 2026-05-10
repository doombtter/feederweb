'use client';

import { motion } from 'framer-motion';
import { PhoneMock } from '@/components/PhoneMock';

const shots = [
  { caption: '익명 피드에서 통하는 사람 발견', variant: 'feed' as const },
  { caption: '목소리로 만나는 1:1 랜덤 통화', variant: 'call' as const },
  { caption: '음성·영상까지 더해진 익명채팅', variant: 'chat' as const },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="section bg-ink-900">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">앱 미리보기</p>
          <h2 className="h-section mt-3">익명소셜의 새로운 경험</h2>
          <p className="text-body mt-4">
            피드, 랜덤 통화, 음성·영상 채팅까지. 가벼운 디자인과 다크 모드 인터페이스로 편안하게.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <motion.div
              key={s.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PhoneMock caption={s.caption} variant={s.variant} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
