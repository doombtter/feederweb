type GAEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: 'event' | 'config' | 'js', target: string, params?: GAEventParams) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(name: string, params: GAEventParams = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

export const events = {
  downloadClick: (store: 'ios' | 'android') =>
    trackEvent('download_click', { store }),
  ctaHeroClick: () => trackEvent('cta_hero_click'),
  faqOpen: (questionId: string) => trackEvent('faq_open', { question_id: questionId }),
  scrollDepth: (depth: 25 | 50 | 75 | 100) => trackEvent('scroll_depth', { depth }),
};
