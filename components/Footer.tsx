import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-ink-600 bg-ink-950 py-12 text-ink-200">
      <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-extrabold tracking-tight text-ink-100">
            <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-brand-gradient" />
            <span className="text-lg">Feeder</span>
          </div>
          <p className="mt-3 text-sm text-ink-300">
            가볍게 시작하는 익명소셜,
            <br />
            피더(Feeder)에서 새친구 만들기.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-100">서비스</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            <li><a href="#features" className="hover:text-ink-100">특징</a></li>
            <li><a href="#how" className="hover:text-ink-100">시작 방법</a></li>
            <li><a href="#download" className="hover:text-ink-100">다운로드</a></li>
            <li><a href="#faq" className="hover:text-ink-100">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-100">정책</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            <li>
              <a
                href={SITE.termsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href={SITE.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100"
              >
                개인정보처리방침
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink-100">스토어 / 운영</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-300">
            <li>
              <a
                href={SITE.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100"
              >
                App Store
              </a>
            </li>
            <li>
              <a
                href={SITE.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100"
              >
                Google Play
              </a>
            </li>
            <li>
              <a
                href={SITE.parentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-100"
              >
                운영사: {SITE.parentName}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-ink-100">
                {SITE.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col items-start justify-between gap-2 border-t border-ink-600 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} siflab. All rights reserved.</p>
        <p>Feeder is a service of siflab.</p>
      </div>
    </footer>
  );
}
