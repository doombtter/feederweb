'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { events } from '@/lib/analytics';
import { faqItems, type FaqItem } from '@/lib/faq';

function FAQRow({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  return (
    <li className="border-b border-ink-600">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`faq-panel-${item.id}`}
        id={`faq-trigger-${item.id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink-100 sm:text-lg">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-300 transition-transform ${open ? 'rotate-180 text-brand-400' : ''}`}
          aria-hidden
        />
      </button>
      <div
        id={`faq-panel-${item.id}`}
        role="region"
        aria-labelledby={`faq-trigger-${item.id}`}
        className={`grid overflow-hidden transition-all ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}
      >
        <div className="min-h-0">
          <p className="text-sm leading-relaxed text-ink-200 sm:text-base">{item.answer}</p>
        </div>
      </div>
    </li>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;
      if (next) events.faqOpen(next);
      return next;
    });
  };

  return (
    <section id="faq" className="section bg-ink-950">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="h-eyebrow">FAQ</p>
          <h2 className="h-section mt-3">자주 묻는 질문</h2>
          <p className="text-body mt-4">랜덤채팅, 익명소셜이 처음이신 분들을 위해 정리했어요.</p>
        </div>
        <ul className="mx-auto mt-12 max-w-3xl">
          {faqItems.map((item) => (
            <FAQRow
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
