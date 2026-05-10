'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Phone, Mic, Clock, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: '익명 피드',
    desc: '취향이 묻어나는 짧은 글·사진·음성·영상으로, 부담 없이 나를 표현하고 통하는 사람을 만나요.',
  },
  {
    icon: Phone,
    title: '랜덤 통화',
    desc: '버튼 한 번으로 시작되는 1:1 음성 매칭. 글로는 표현 못 하는 분위기, 목소리로 가볍게 나눠보세요.',
  },
  {
    icon: Mic,
    title: '음성 · 영상 채팅',
    desc: '텍스트만으로는 부족할 때, 음성 메시지와 영상 통화로 더 진짜 같은 익명채팅을 즐겨요.',
  },
  {
    icon: Clock,
    title: '24시간 샷',
    desc: '오늘만 보여주고 싶은 순간은 샷으로. 24시간 뒤 자동으로 사라져 부담 없이 일상을 공유해요.',
  },
  {
    icon: Sparkles,
    title: '취향 기반 매칭',
    desc: '관심사·분위기가 비슷한 사람을 우선 추천. 단순 랜덤채팅이 아닌, 통하는 사람과의 랜덤매칭.',
  },
  {
    icon: ShieldCheck,
    title: '안전한 대화 환경',
    desc: '신고/차단 즉시 반영, 청소년 보호 정책과 자동 필터링으로 건전한 익명소셜을 지향합니다.',
  },
];

export function Features() {
  return (
    <section id="features" className="section bg-ink-950">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">Feeder의 매력</p>
          <h2 className="h-section mt-3">랜덤채팅, 이렇게 다릅니다</h2>
          <p className="text-body mt-4">
            가볍지만 진심인 만남. 피더는 익명소셜의 즐거움을 더하고, 위험은 줄였습니다.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.li
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="surface-card p-6 transition hover:border-brand-500/60 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30">
                <f.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{f.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
