import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white py-12">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight">
            <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-brand-500" />
            <span className="text-lg">Feeder</span>
          </div>
          <p className="mt-3 text-sm text-ink-500">
            가볍게 시작하는 랜덤채팅,
            <br />
            익명으로 새친구 만들기.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-900">서비스</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><a href="#features" className="hover:text-ink-900">특징</a></li>
            <li><a href="#how" className="hover:text-ink-900">시작 방법</a></li>
            <li><a href="#download" className="hover:text-ink-900">다운로드</a></li>
            <li><a href="#faq" className="hover:text-ink-900">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-900">정책</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><a href="/terms" className="hover:text-ink-900">이용약관</a></li>
            <li><a href="/privacy" className="hover:text-ink-900">개인정보처리방침</a></li>
            <li><a href="/youth" className="hover:text-ink-900">청소년 보호정책</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-900">문의</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-ink-900">
                {SITE.contactEmail}
              </a>
            </li>
            <li>
              <a
                href={SITE.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-900"
              >
                운영사: {SITE.parentName}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col items-start justify-between gap-2 border-t border-ink-100 pt-6 text-xs text-ink-300 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} siflab. All rights reserved.</p>
        <p>Feeder is a service of siflab.</p>
      </div>
    </footer>
  );
}
