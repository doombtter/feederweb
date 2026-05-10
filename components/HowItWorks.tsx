'use client';

import { motion } from 'framer-motion';
import { Download, UserPlus, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: '앱 다운로드',
    desc: 'App Store 또는 Google Play에서 피더(Feeder)를 무료로 다운로드하세요.',
  },
  {
    icon: UserPlus,
    title: '전화번호 인증 + 닉네임',
    desc: '만 19세 이상 본인 확인을 위해 전화번호로 가볍게 인증하고, 노출용 닉네임을 정해요. 닉네임은 매칭과 무관해요.',
  },
  {
    icon: MessagesSquare,
    title: '글 읽고 익명으로 연결되기',
    desc: '익명 글 피드에서 마음에 드는 글에 댓글·채팅으로 다가가고, 랜덤 통화·시크릿 사진으로 가볍게 통해요.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section bg-ink-950">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">시작 방법</p>
          <h2 className="h-section mt-3">3단계로 시작하는 모르는사람과 대화</h2>
          <p className="text-body mt-4">
            복잡한 가입 절차도, 어색한 첫 인사도 필요 없어요. 정말 간단합니다.
          </p>
        </div>
        <ol className="relative mt-14 grid gap-8 sm:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent sm:block"
          />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                <s.icon className="h-6 w-6" aria-hidden />
              </div>
              <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-brand-400">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold text-ink-100">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-300">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
