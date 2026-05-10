'use client';

import { motion } from 'framer-motion';
import { Shuffle, UserCircle2, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Shuffle,
    title: '랜덤 매칭',
    desc: '버튼 한 번에 새로운 사람을 만나보세요. 망설일 시간이 없는 가장 빠른 새친구 만들기.',
  },
  {
    icon: UserCircle2,
    title: '부담 없는 익명',
    desc: '전화번호 없이, 닉네임 하나로 시작하는 익명채팅. 내 정보는 안전하게, 대화는 솔직하게.',
  },
  {
    icon: Sparkles,
    title: '취향 기반 추천',
    desc: '관심사가 비슷한 사람과 자연스럽게. 단순 랜덤채팅이 아닌, 통하는 사람과의 랜덤매칭.',
  },
  {
    icon: ShieldCheck,
    title: '안전한 대화 환경',
    desc: '신고/차단 즉시 반영. 청소년 보호 정책과 24시간 모니터링으로 건전한 익명소셜을 만듭니다.',
  },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">Feeder의 매력</p>
          <h2 className="h-section mt-3">랜덤채팅, 이렇게 다릅니다</h2>
          <p className="text-body mt-4">
            가볍지만 진심인 만남. Feeder는 익명소셜의 즐거움을 더하고, 위험은 줄였습니다.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{f.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
