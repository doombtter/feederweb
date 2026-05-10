import Link from 'next/link';

const navItems = [
  { href: '#features', label: '특징' },
  { href: '#how', label: '시작 방법' },
  { href: '#reviews', label: '후기' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-600/60 bg-ink-950/80 backdrop-blur">
      <nav
        aria-label="주요 메뉴"
        className="container-page flex h-16 items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-ink-100">
          <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-brand-gradient shadow-glow" />
          <span className="text-lg">Feeder</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm font-medium text-ink-200 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-ink-100">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#download" className="btn-primary !px-4 !py-2 text-sm">
          다운로드
        </a>
      </nav>
    </header>
  );
}
