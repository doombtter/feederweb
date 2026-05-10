import { Sparkles, Mic, Phone, Heart } from 'lucide-react';

export function PhoneMock({ caption, variant = 'feed' }: { caption?: string; variant?: 'feed' | 'call' | 'chat' }) {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="relative aspect-[9/19] rounded-[2.5rem] border-[10px] border-ink-700 bg-ink-900 shadow-floating">
        <div
          className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-950"
          aria-hidden
        />
        <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-20 h-40 w-40 rounded-full bg-accent-500/20 blur-3xl"
          />

          <div className="relative flex items-center justify-between px-5 pt-8 text-xs font-semibold text-ink-200">
            <span>9:41</span>
            <span aria-hidden>● ● ●</span>
          </div>

          {variant === 'feed' ? <FeedScreen /> : null}
          {variant === 'call' ? <CallScreen /> : null}
          {variant === 'chat' ? <ChatScreen /> : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 text-center text-sm text-ink-300">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function FeedScreen() {
  return (
    <>
      <div className="relative px-5 pt-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-brand-400">
          <Sparkles className="h-4 w-4" aria-hidden />
          오늘의 피드
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug text-ink-100">
          익명으로 솔직하게,
          <br />
          가볍게 연결되기
        </h3>
      </div>
      <div className="relative mt-5 space-y-3 px-5">
        {[
          { name: '서연', tag: '음악 · 산책', color: 'from-brand-400 to-brand-600' },
          { name: '하준', tag: '게임 · 영화', color: 'from-sky-400 to-brand-500' },
          { name: '지유', tag: '카페 · 독서', color: 'from-accent-500 to-brand-500' },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-2xl border border-ink-600 bg-ink-800/80 p-3 shadow-card backdrop-blur"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${p.color} text-sm font-bold text-white`}
              aria-hidden
            >
              {p.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink-100">{p.name}</p>
              <p className="text-xs text-ink-300">{p.tag}</p>
            </div>
            <button
              type="button"
              className="rounded-full bg-brand-gradient p-2 text-white shadow-glow"
              aria-label={`${p.name}에게 메시지 보내기`}
            >
              <Heart className="h-4 w-4" aria-hidden />
            </button>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow">
        <Sparkles className="h-4 w-4" aria-hidden />
        매칭 시작하기
      </div>
    </>
  );
}

function CallScreen() {
  return (
    <>
      <div className="relative mt-10 flex flex-col items-center px-5 text-center">
        <div className="relative">
          <div className="absolute inset-0 -z-10 animate-pulseGlow rounded-full bg-brand-500/40 blur-2xl" aria-hidden />
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-gradient text-3xl font-bold text-white shadow-glow">
            R
          </div>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-400">
          랜덤 통화 매칭 중
        </p>
        <p className="mt-2 text-lg font-bold text-ink-100">목소리만으로 통하는 친구</p>
        <p className="mt-1 text-xs text-ink-300">최대 3분 · 30 포인트</p>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-700 text-ink-200"
          aria-label="음소거"
        >
          <Mic className="h-5 w-5" aria-hidden />
        </button>
        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-white shadow-glow"
          aria-label="통화 시작"
        >
          <Phone className="h-6 w-6" aria-hidden />
        </button>
      </div>
    </>
  );
}

function ChatScreen() {
  const messages = [
    { who: 'them', text: '안녕! 프로필 보고 말 걸어봤어요 😄', time: '오후 9:14' },
    { who: 'me', text: '저도 반가워요. 음악 좋아하시는 거 같던데?', time: '오후 9:15' },
    { who: 'them', text: '네! 요즘 시티팝 자주 들어요', time: '오후 9:15' },
  ];
  return (
    <>
      <div className="relative px-5 pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-sm font-bold text-white">
            S
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-100">서연</p>
            <p className="text-xs text-brand-400">● 온라인</p>
          </div>
        </div>
      </div>
      <div className="relative mt-5 flex flex-col gap-2 px-5">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs ${
              m.who === 'me'
                ? 'self-end bg-brand-gradient text-white'
                : 'self-start border border-ink-600 bg-ink-800 text-ink-100'
            }`}
          >
            {m.text}
          </div>
        ))}
        <div className="self-start rounded-2xl border border-ink-600 bg-ink-800 px-3 py-2 text-xs text-ink-300">
          <Mic className="mr-1 inline h-3 w-3" aria-hidden /> 음성 메시지 · 0:18
        </div>
      </div>
    </>
  );
}
