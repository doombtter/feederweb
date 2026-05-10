'use client';

import { motion } from 'framer-motion';
import { PhoneMock } from '@/components/PhoneMock';

const shots = [
  { caption: '관심사로 매칭된 친구와 대화 시작' },
  { caption: '부담 없는 익명 프로필' },
  { caption: '신고·차단으로 안전하게' },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="section bg-ink-100/50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">앱 미리보기</p>
          <h2 className="h-section mt-3">익명소셜의 새로운 경험</h2>
          <p className="text-body mt-4">
            실제 앱 화면을 미리 만나보세요. 가벼운 디자인, 직관적인 매칭, 편안한 대화 환경.
          </p>
        </div>
        {/* 실제 앱 스크린샷이 준비되면 PhoneMock을 next/image로 교체할 것 */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((s, i) => (
            <motion.div
              key={s.caption}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PhoneMock caption={s.caption} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
