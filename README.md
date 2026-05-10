# Feeder Landing (feeder.siflab.org)

Next.js 14 App Router · TypeScript · Tailwind CSS 기반 SEO 최적화 랜딩페이지.
기획서: [`feeder-landing-spec.md`](./feeder-landing-spec.md).

## 빠른 시작

```bash
npm install
npm run dev
```

`http://localhost:3000` 접속.

## 환경 변수

`.env.local`에 다음을 설정합니다(모두 선택, 없으면 기본값/플레이스홀더 사용):

```env
NEXT_PUBLIC_SITE_URL=https://feeder.siflab.org
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_APP_STORE_URL=
NEXT_PUBLIC_PLAY_STORE_URL=
```

App Store / Play Store URL 중 하나라도 비어 있으면 다운로드 배지가 "출시 준비 중" 안내로 대체됩니다.

## 구조

- `app/layout.tsx` — 메타데이터, OG/Twitter, JSON-LD, GA 스크립트
- `app/page.tsx` — 랜딩 본문(섹션 컴포지션)
- `app/sitemap.ts`, `app/robots.ts` — SEO 자산
- `app/opengraph-image.tsx` — 동적 OG 이미지
- `components/` — Hero / Features / Screenshots / HowItWorks / Reviews / DownloadCTA / FAQ / Footer / SearchBar
- `components/JsonLd.tsx` — `MobileApplication`, `Organization`, `FAQPage` 구조화 데이터
- `components/SearchBar.tsx` — 페이지 내 검색(⌘K)
- `lib/site.ts`, `lib/analytics.ts` — 사이트 설정 / GA 이벤트 헬퍼

## SEO 체크리스트

- [x] 한국어 키워드(랜챗 / 랜덤채팅 / 익명채팅 / 익명소셜 / 새친구 만들기) 자연스럽게 배치
- [x] `<h1>` 1개, 섹션별 `<h2>`
- [x] JSON-LD `MobileApplication` / `Organization` / `FAQPage`
- [x] `sitemap.xml`, `robots.txt`
- [x] OG / Twitter 메타데이터 + 동적 OG 이미지
- [x] 모바일 우선 반응형 디자인
- [ ] Google Search Console / Naver 웹마스터 / Daum 검색 등록(배포 후)

## 배포

Vercel에 GitHub 저장소를 연결하고 위 환경변수를 등록한 뒤 커스텀 도메인 `feeder.siflab.org`(CNAME)을 연결합니다.
