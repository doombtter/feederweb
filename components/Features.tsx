'use client';

import { motion } from 'framer-motion';
import { Pencil, Phone, Mic, Clock, EyeOff, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Pencil,
    title: '익명 글 피드',
    desc: '실명도 프로필 사진도 없이, 글 한 줄로 시작하는 100% 익명소셜. 부담 없이 생각을 적고 댓글로 통해보세요.',
  },
  {
    icon: Phone,
    title: '랜덤 통화 (최대 10분)',
    desc: '버튼 한 번으로 시작되는 1:1 음성 매칭. 하루 무료 횟수가 제공되며, 글로는 표현 못 하는 분위기를 목소리로 나눠요.',
  },
  {
    icon: Mic,
    title: '음성 · 영상 채팅',
    desc: '텍스트만으로 부족할 때, 음성 메시지와 영상 통화로 더 진짜 같은 익명채팅을 즐길 수 있어요.',
  },
  {
    icon: EyeOff,
    title: '1회 시크릿 사진 / 영상',
    desc: '딱 한 번만 열어볼 수 있는 시크릿 사진·영상. 캡처 알림과 자동 만료로 사진이 흘러갈 걱정 없이 가볍게 공유.',
  },
  {
    icon: Clock,
    title: '24시간 샷',
    desc: '오늘만 보여주고 싶은 순간은 샷으로. 24시간 뒤 자동으로 사라져 부담 없이 일상을 공유해요.',
  },
  {
    icon: ShieldCheck,
    title: '안전한 대화 환경',
    desc: '전화번호 인증 + 만 19세 이상 이용, 신고/차단 즉시 반영, 자동 필터링으로 건전한 익명소셜을 지향합니다.',
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
