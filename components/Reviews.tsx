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
    text: '랜덤채팅 앱은 무서웠는데 Feeder는 분위기가 정말 가벼워요. 취향 비슷한 친구를 만나서 매일 켜요!',
    source: '베타테스터 후기',
    color: 'from-brand-400 to-brand-600',
  },
  {
    initial: 'J',
    nickname: '준호',
    rating: 5,
    text: '익명채팅인데도 부담스럽지 않아서 좋아요. 신고 기능이 빠르게 작동하니까 안심하고 쓸 수 있어요.',
    source: '베타테스터 후기',
    color: 'from-accent-400 to-accent-600',
  },
  {
    initial: 'M',
    nickname: '민지',
    rating: 4,
    text: '랜챗 앱 중에 디자인이 제일 귀엽고 직관적이에요. 닉네임만 만들고 바로 대화할 수 있어서 편해요.',
    source: '베타테스터 후기',
    color: 'from-brand-300 to-accent-500',
  },
  {
    initial: 'D',
    nickname: '도윤',
    rating: 5,
    text: '관심사 기반 매칭이 진짜 좋아요. 처음 보는 사람과도 어색함이 빨리 풀려요.',
    source: '베타테스터 후기',
    color: 'from-brand-500 to-accent-400',
  },
  {
    initial: 'H',
    nickname: '하은',
    rating: 4,
    text: '새친구 만들기 앱 여러 개 써봤는데, Feeder가 제일 건전한 분위기에요. 추천!',
    source: '베타테스터 후기',
    color: 'from-accent-500 to-brand-400',
  },
  {
    initial: 'Y',
    nickname: '윤서',
    rating: 5,
    text: '익명소셜인데도 따뜻한 대화가 많아서 의외였어요. 가볍게 켜놓기 좋은 앱.',
    source: '베타테스터 후기',
    color: 'from-brand-400 to-accent-500',
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`별점 ${rating}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-brand-400 text-brand-400' : 'text-ink-300'}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="section bg-ink-100/50">
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
              className="rounded-2xl bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${r.color} text-sm font-bold text-white`}
                  aria-hidden
                >
                  {r.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{r.nickname}</p>
                  <Stars rating={r.rating} />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">“{r.text}”</p>
              <p className="mt-3 text-xs text-ink-300">{r.source}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
