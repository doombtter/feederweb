'use client';

import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { faqItems } from '@/lib/faq';

type Doc = {
  id: string;
  section: string;
  sectionId: string;
  title: string;
  body: string;
};

const docs: Doc[] = [
  {
    id: 'hero',
    section: 'Hero',
    sectionId: 'top',
    title: '오늘, 새로운 친구를 만나는 가장 가벼운 방법',
    body: '피더 Feeder 익명소셜 랜덤채팅 랜덤통화 새친구 만들기 닉네임 음성 영상',
  },
  {
    id: 'feat-feed',
    section: '특징',
    sectionId: 'features',
    title: '익명 피드',
    body: '글 사진 음성 영상으로 표현하는 익명소셜 피드 새친구',
  },
  {
    id: 'feat-call',
    section: '특징',
    sectionId: 'features',
    title: '랜덤 통화',
    body: '1:1 음성 매칭 랜덤통화 모르는사람과 대화 목소리',
  },
  {
    id: 'feat-voice-video',
    section: '특징',
    sectionId: 'features',
    title: '음성 · 영상 채팅',
    body: '음성 메시지 영상 통화 익명채팅',
  },
  {
    id: 'feat-shot',
    section: '특징',
    sectionId: 'features',
    title: '24시간 샷',
    body: '24시간 뒤 사라지는 게시물 일상 공유 스토리',
  },
  {
    id: 'feat-interest',
    section: '특징',
    sectionId: 'features',
    title: '취향 기반 매칭',
    body: '관심사 분위기 비슷한 사람 추천 랜덤매칭',
  },
  {
    id: 'feat-safety',
    section: '특징',
    sectionId: 'features',
    title: '안전한 대화 환경',
    body: '신고 차단 즉시 반영 청소년 보호 안전한 익명소셜',
  },
  {
    id: 'how',
    section: '시작 방법',
    sectionId: 'how',
    title: '3단계로 시작하는 모르는사람과 대화',
    body: '앱 다운로드 닉네임 만들기 피드 매칭',
  },
  {
    id: 'download',
    section: '다운로드',
    sectionId: 'download',
    title: '지금 바로 시작해보세요',
    body: '무료 다운로드 App Store Google Play 검색 피더',
  },
  ...faqItems.map((f) => ({
    id: `faq-${f.id}`,
    section: 'FAQ',
    sectionId: 'faq',
    title: f.question,
    body: f.answer,
  })),
];

function score(doc: Doc, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  const tokens = q.split(/\s+/).filter(Boolean);
  let s = 0;
  const haystack = `${doc.title} ${doc.body}`.toLowerCase();
  for (const t of tokens) {
    if (doc.title.toLowerCase().includes(t)) s += 3;
    if (haystack.includes(t)) s += 1;
  }
  return s;
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return docs
      .map((d) => ({ doc: d, s: score(d, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="페이지 내 검색 열기"
        className="fixed bottom-6 right-6 z-30 flex h-12 items-center gap-2 rounded-full bg-brand-gradient px-5 text-sm font-medium text-white shadow-glow hover:brightness-110"
      >
        <Search className="h-4 w-4" aria-hidden />
        <span>검색</span>
        <kbd className="ml-1 hidden rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-semibold tracking-wider sm:inline">
          ⌘K
        </kbd>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="페이지 내 검색"
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-ink-600 bg-ink-800 shadow-floating">
            <div className="flex items-center gap-3 border-b border-ink-600 px-4">
              <Search className="h-5 w-5 text-ink-300" aria-hidden />
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어를 입력하세요 (예: 랜덤통화, 샷, 무료)"
                className="h-12 flex-1 bg-transparent text-base text-ink-100 outline-none placeholder:text-ink-400"
              />
              <button
                type="button"
                aria-label="검색 닫기"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-ink-300 hover:bg-ink-700"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {query.trim() === '' ? (
                <li className="px-4 py-6 text-center text-sm text-ink-400">
                  검색어를 입력해 페이지 내용을 빠르게 찾아보세요.
                </li>
              ) : results.length === 0 ? (
                <li className="px-4 py-6 text-center text-sm text-ink-300">
                  &quot;{query}&quot;에 대한 결과가 없어요.
                </li>
              ) : (
                results.map(({ doc }) => (
                  <li key={doc.id}>
                    <a
                      href={`#${doc.sectionId}`}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 transition hover:bg-ink-700"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                        {doc.section}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-ink-100">{doc.title}</p>
                      <p className="mt-1 line-clamp-2 text-xs text-ink-300">{doc.body}</p>
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
