'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// NOTE: 아래는 베타테스터 후기 예시입니다.
// 실제 출시 이후 App Store / Play Store 리뷰로 교체할 것.
const reviews = [
  {
    initial: 'S',
    nickname: '서연',
    rating: 5,
    text: '피드가 가벼워서 부담 없이 보게 돼요. 음성 메시지로 대화하니까 글보다 훨씬 친해지는 느낌!',
    source: '베타테스터 후기',
    color: 'from-brand-400 to-brand-600',
  },
  {
    initial: 'J',
    nickname: '준호',
    rating: 5,
    text: '랜덤 통화 기능이 진짜 좋아요. 글로 어색할 때 목소리로 풀리니까 새친구 만들기 쉬워졌어요.',
    source: '베타테스터 후기',
    color: 'from-sky-400 to-brand-500',
  },
  {
    initial: 'M',
    nickname: '민지',
    rating: 4,
    text: '익명채팅인데 다크 모드 디자인이 깔끔하고 분위기 있어요. 신고 기능도 빠르게 작동해서 안심.',
    source: '베타테스터 후기',
    color: 'from-accent-500 to-brand-400',
  },
  {
    initial: 'D',
    nickname: '도윤',
    rating: 5,
    text: '취향 기반 추천이 잘 맞아요. 처음 보는 사람과도 어색함이 빨리 풀려요.',
    source: '베타테스터 후기',
    color: 'from-brand-500 to-accent-400',
  },
  {
    initial: 'H',
    nickname: '하은',
    rating: 4,
    text: '24시간 샷이 부담 없어서 좋아요. 프로필 다 보여주지 않고도 분위기가 통해요.',
    source: '베타테스터 후기',
    color: 'from-brand-400 to-sky-400',
  },
  {
    initial: 'Y',
    nickname: '윤서',
    rating: 5,
    text: '익명소셜인데 따뜻한 대화가 많아서 의외였어요. 가볍게 켜놓기 좋은 앱.',
    source: '베타테스터 후기',
    color: 'from-brand-500 to-accent-500',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`별점 ${rating}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-brand-400 text-brand-400' : 'text-ink-500'}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="section bg-ink-900">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">사용자 후기</p>
          <h2 className="h-section mt-3">먼저 만난 친구들의 이야기</h2>
          <p className="text-body mt-4">
            아래는 정식 출시 전 베타테스터 후기입니다. 실제 사용자 리뷰는 출시 이후 업데이트됩니다.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.li
              key={r.nickname}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="surface-card p-6"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-white`}
                  aria-hidden
                >
                  {r.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-100">{r.nickname}</p>
                  <Stars rating={r.rating} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-200">“{r.text}”</p>
              <p className="mt-3 text-xs text-ink-400">{r.source}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
