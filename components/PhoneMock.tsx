import { Sparkles, MessageCircle, Heart } from 'lucide-react';

export function PhoneMock({ caption }: { caption?: string }) {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-ink-900 bg-ink-900 shadow-card">
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-900" aria-hidden />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-brand-50 via-white to-accent-400/30">
          <div className="flex items-center justify-between px-5 pt-8 text-xs font-semibold text-ink-700">
            <span>9:41</span>
            <span aria-hidden>● ● ●</span>
          </div>
          <div className="px-5 pt-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-600">
              <Sparkles className="h-4 w-4" aria-hidden />
              오늘의 매칭
            </div>
            <h3 className="mt-2 text-lg font-bold leading-snug text-ink-900">
              비슷한 취향의 친구를
              <br />
              만나보세요
            </h3>
          </div>
          <div className="mt-5 space-y-3 px-5">
            {[
              { name: '서연', tag: '음악 · 산책', color: 'from-brand-400 to-brand-600' },
              { name: '하준', tag: '게임 · 영화', color: 'from-accent-400 to-accent-600' },
              { name: '지유', tag: '카페 · 독서', color: 'from-brand-300 to-accent-500' },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 rounded-2xl bg-white/80 p-3 shadow-card backdrop-blur"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${p.color} text-sm font-bold text-white`}
                  aria-hidden
                >
                  {p.name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink-900">{p.name}</p>
                  <p className="text-xs text-ink-500">{p.tag}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-brand-500 p-2 text-white"
                  aria-label={`${p.name}와 대화 시작`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                </button>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white shadow-lg">
            <Heart className="h-4 w-4 text-brand-300" aria-hidden />
            매칭 시작하기
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
