# Feeder 랜딩페이지 기획서

> **For:** Claude Code
> **Project:** feeder.siflab.org 랜딩페이지 구축
> **Last updated:** 2026-05-10

---

## 1. 프로젝트 개요

### 1.1 목적
- Feeder 앱(Flutter 기반 모바일/웹 앱, GitHub: `doombtter/feeder`)의 다운로드 전환을 목표로 한 랜딩페이지 제작
- "재미있는 새 친구 만들기 - 가볍고 캐주얼" 컨셉으로 포지셔닝
- 구글 SEO를 통해 **랜챗 / 랜덤채팅 / 익명소셜 / 새친구 / 모르는사람과대화** 키워드에서 노출 확보

### 1.2 도메인 / 호스팅
- **본 사이트:** `siflab.org` (이미 운영 중)
- **랜딩페이지 도메인:** `feeder.siflab.org` (서브도메인 신규 할당)
- **호스팅 권장:** Vercel (Next.js 친화, 무료 SSL, 한국 엣지 캐싱 우수)
  - 대안: Cloudflare Pages, Netlify
- **DNS 설정:** `siflab.org`의 DNS 관리에서 `feeder` CNAME 레코드 → Vercel 배포 도메인으로 연결

### 1.3 핵심 메시지 (Hero Copy 후보)
- 메인: **"오늘, 새로운 친구를 만나는 가장 가벼운 방법"**
- 서브: **"부담 없이 시작하는 랜덤 친구 만들기, Feeder"**
- CTA 버튼: `지금 무료로 시작하기` / `앱 다운로드`

---

## 2. 기술 스택

| 항목 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | **Next.js 14+ (App Router)** | SSG/ISR로 SEO 최적화 |
| 언어 | **TypeScript** | |
| 스타일링 | **Tailwind CSS** | |
| UI 컴포넌트 | **shadcn/ui** (선택) | 빠른 프로토타이핑 |
| 애니메이션 | **Framer Motion** | 캐주얼한 톤에 부합하는 마이크로 인터랙션 |
| 아이콘 | **lucide-react** | |
| 폰트 | **Pretendard** (한국어), **Inter** (영문 보조) | |
| 분석 | **Google Analytics 4** + **Google Search Console** | 필수 |
| 배포 | **Vercel** | |
| 이미지 최적화 | `next/image` | WebP 자동 변환 |

### 2.1 프로젝트 구조
```
feeder-landing/
├── app/
│   ├── layout.tsx          # 메타데이터, 폰트, GA
│   ├── page.tsx            # 메인 랜딩
│   ├── sitemap.ts          # 동적 sitemap
│   ├── robots.ts           # robots.txt
│   └── opengraph-image.tsx # OG 이미지 동적 생성
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Screenshots.tsx
│   ├── Reviews.tsx
│   ├── DownloadCTA.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/
│   ├── screenshots/        # 앱 스크린샷
│   ├── og-image.png        # OG 기본 이미지
│   └── favicon/            # 파비콘 세트
└── lib/
    └── analytics.ts
```

---

## 3. 페이지 구성 (Section by Section)

### 3.1 Hero 섹션 (위)
- **레이아웃:** 좌측 카피 + 우측 앱 목업(휴대폰 프레임 안에 스크린샷)
- **요소:**
  - 헤드라인: "오늘, 새로운 친구를 만나는 가장 가벼운 방법"
  - 서브헤드라인: 1~2줄 설명
  - **CTA 버튼 2개:** App Store 배지, Google Play 배지 (공식 배지 에셋 사용)
  - 신뢰 시그널: "이미 OO명이 사용 중" 같은 카운터 (선택)
- **모바일:** 카피 위, 목업 아래 세로 배치

### 3.2 Features 섹션 (앱의 매력 3~4개)
- 카드 3~4개, 각 카드에 아이콘 + 제목 + 짧은 설명
- 예시 (실제 앱 기능에 맞춰 조정 필요):
  1. **랜덤 매칭** — "버튼 한 번에 새로운 사람 만나기"
  2. **부담 없는 익명** — "전화번호 없이, 닉네임 하나로 시작"
  3. **취향 기반 추천** — "관심사가 비슷한 사람과 자연스럽게"
  4. **안전한 대화 환경** — "신고/차단 즉시 반영"

### 3.3 Screenshots 갤러리
- **레이아웃:** 가로 스크롤 캐러셀 또는 그리드 (3~5장)
- 휴대폰 프레임 안에 스크린샷 배치 (모킹 권장)
- 각 스크린샷 아래 한 줄 캡션 (예: "관심사로 매칭된 친구와 대화 시작")
- 스크린샷 미준비 시 디자인 플레이스홀더 표시 + 추후 교체 메모

### 3.4 작동 방식 (How it Works)
- 3단계 플로우, 아이콘 + 짧은 설명
  1. 앱 다운로드
  2. 닉네임 만들기
  3. 매칭 시작
- 시각적으로 화살표나 점선으로 연결

### 3.5 Reviews / 후기 섹션
- 카드형 그리드 3~6개
- 초기에는 더미 후기로 채우고, 실제 리뷰 확보 후 교체 (코드 주석으로 명시)
- 각 카드: 별점, 닉네임 이니셜 아바타, 한두 줄 후기, 출처(App Store/Play Store) 표기
- **주의:** 가짜 후기는 SEO 페널티/법적 리스크가 있으므로 "예시" 또는 "베타테스터 후기" 명시 권장

### 3.6 Download CTA 섹션 (재CTA)
- 큰 박스, 배경색 강조
- "지금 바로 시작해보세요" + 스토어 배지 2개
- QR 코드도 함께 (데스크톱 사용자가 모바일로 바로 다운로드)

### 3.7 FAQ 섹션 (SEO 보너스 + 신뢰)
- 아코디언 형태, 5~7개 질문
- 예시:
  - Feeder는 무료인가요?
  - 개인정보가 노출되나요?
  - 미성년자도 사용할 수 있나요?
  - 신고/차단은 어떻게 하나요?
  - 어떤 사람들이 사용하나요?
- **JSON-LD `FAQPage` 스키마 필수 삽입** (Google 리치 결과 노출)

### 3.8 Footer
- siflab.org 링크 (모회사 표기)
- 이용약관, 개인정보처리방침 링크 (별도 페이지 필요 — 추후 작업)
- 문의 이메일
- 저작권 표기

---

## 4. SEO 전략 (핵심)

### 4.1 타겟 키워드 (한국어)

**Primary (메인 1~3개에 배치):**
- 랜챗
- 랜덤채팅
- 익명채팅

**Secondary (Features/FAQ에 자연스럽게):**
- 랜덤채팅 어플
- 익명소셜
- 새친구 만들기 앱
- 모르는사람과 대화
- 익명 대화 앱
- 랜덤매칭 앱

**Long-tail (FAQ/블로그형 콘텐츠에):**
- 안전한 랜덤채팅 앱
- 무료 익명채팅 어플 추천
- 새친구 만드는 앱

### 4.2 메타데이터 설계

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://feeder.siflab.org'),
  title: {
    default: 'Feeder - 가볍게 시작하는 랜덤채팅, 익명으로 새친구 만들기',
    template: '%s | Feeder'
  },
  description: '랜챗, 랜덤채팅, 익명소셜의 새로운 기준. Feeder에서 부담 없이 새로운 친구를 만나보세요. 무료 다운로드.',
  keywords: ['랜챗', '랜덤채팅', '익명채팅', '익명소셜', '새친구 만들기', '랜덤매칭'],
  openGraph: {
    title: 'Feeder - 랜챗 · 랜덤채팅 · 익명소셜 앱',
    description: '오늘, 새로운 친구를 만나는 가장 가벼운 방법',
    url: 'https://feeder.siflab.org',
    siteName: 'Feeder',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feeder - 가볍게 시작하는 랜덤채팅',
    description: '오늘, 새로운 친구를 만나는 가장 가벼운 방법',
    images: ['/og-image.png']
  },
  alternates: { canonical: 'https://feeder.siflab.org' },
  robots: { index: true, follow: true }
}
```

### 4.3 시맨틱 HTML 구조 규칙
- `<h1>`은 페이지에 **단 1개** (Hero 헤드라인)
- 섹션마다 `<h2>` 사용, 키워드 자연스럽게 포함
  - 예: `<h2>랜덤채팅, 이렇게 다릅니다</h2>`, `<h2>익명소셜의 새로운 경험</h2>`
- 이미지는 모두 의미 있는 `alt` 속성 (예: `alt="Feeder 앱 랜덤채팅 매칭 화면"`)
- `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` 시맨틱 태그 적극 사용

### 4.4 구조화 데이터 (JSON-LD) — **필수**
다음 3개를 `<head>`에 삽입:

1. **MobileApplication** (앱 정보)
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Feeder",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "SocialNetworkingApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.5", "ratingCount": "100" }
}
```
2. **Organization** (siflab 회사 정보)
3. **FAQPage** (FAQ 섹션 내용)

### 4.5 기술적 SEO 체크리스트
- [ ] `robots.txt` 생성 (`app/robots.ts`)
- [ ] `sitemap.xml` 생성 (`app/sitemap.ts`)
- [ ] Google Search Console 등록 + 사이트맵 제출
- [ ] Naver 웹마스터도구 등록 (한국 시장 필수)
- [ ] Daum 검색 등록
- [ ] 페이지 로딩 속도: Lighthouse Performance 90점 이상
- [ ] Core Web Vitals 통과 (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] 모바일 친화도 100% (모바일 트래픽이 80%+ 예상)
- [ ] HTTPS 강제 (Vercel 기본 제공)
- [ ] `feeder.siflab.org`와 `siflab.org`의 내부 링크 상호 연결 (도메인 권위 공유)

### 4.6 SEO 콘텐츠 작성 원칙
- 키워드 밀도는 자연스럽게 (1~2% 내외, 키워드 스터핑 금지)
- 본문에 키워드 변형형 골고루 사용 ("랜챗", "랜덤채팅", "익명채팅" 섞어쓰기)
- 첫 100단어 안에 primary 키워드 1회 이상
- 이미지 파일명도 SEO 친화적 (`random-chat-screen.webp` 같은 영문 또는 `랜덤채팅-매칭화면.webp`)

---

## 5. 디자인 가이드라인

### 5.1 톤앤매너
- **컨셉:** 가볍고 캐주얼, 친근함, 부담 없음
- 키워드: 통통 튀는, 말랑말랑한, 친구 같은
- **피해야 할 톤:** 무겁고 진지함, 과도한 마케팅 카피, 위협/불안 조성

### 5.2 컬러 팔레트 (제안)
- Primary: 따뜻한 코랄/오렌지 계열 (#FF6B5C 같은) 또는 부드러운 퍼플 (#7C5CFF)
- Secondary: 민트/그린 계열 액센트
- Background: 화이트 베이스, 섹션별 살짝 다른 톤
- **siflab.org의 브랜드 컬러를 우선 확인하고 일관성 있게 조정**

### 5.3 타이포그래피
- 한글: Pretendard (가독성 + 트렌디)
- 영문: Inter
- Hero 헤드라인: 48~72px (데스크톱), 32~40px (모바일)
- 본문: 16~18px

### 5.4 인터랙션
- Hero 진입 시 페이드인 + 살짝 슬라이드업 (Framer Motion)
- 스크롤에 따라 섹션별 등장 애니메이션
- 버튼 호버: 살짝 들리는 효과 + 그림자
- **과하지 않게** — 로딩 속도 우선

---

## 6. 다운로드 버튼 / 외부 링크

### 6.1 앱스토어 배지
- **iOS:** Apple 공식 "App Store에서 다운로드" 배지 사용
  - 가이드: https://developer.apple.com/app-store/marketing/guidelines/
- **Android:** Google Play 공식 배지
  - 가이드: https://play.google.com/intl/en_us/badges/

### 6.2 링크 처리
- `target="_blank"` + `rel="noopener noreferrer"`
- GA에서 클릭 이벤트 추적 (`download_click`, label로 ios/android 구분)

### 6.3 앱 미배포 상태일 경우
- "준비 중" 표시 + 사전알림 신청 이메일 폼 (Mailchimp/Resend 연동)
- 앱이 실제 배포된 후 링크 교체

---

## 7. 분석 / 추적

### 7.1 Google Analytics 4 이벤트
다음 이벤트 추적 구현:
- `page_view` (자동)
- `download_click` (params: `store: ios | android`)
- `cta_hero_click`
- `faq_open` (params: `question_id`)
- `scroll_depth` (25%, 50%, 75%, 100%)

### 7.2 Search Console
- 사이트맵 제출 후 1~2주 내 인덱싱 확인
- 주요 키워드 순위 모니터링

### 7.3 Naver Search Advisor
- 한국 시장 필수
- 사이트 등록 + RSS 제출

---

## 8. 작업 단계 (Claude Code에 권장하는 순서)

1. **Step 1 — 프로젝트 셋업**
   - `npx create-next-app@latest feeder-landing --typescript --tailwind --app`
   - shadcn/ui, framer-motion, lucide-react 설치
   - Pretendard 폰트 적용

2. **Step 2 — 기본 레이아웃 + 메타데이터**
   - `app/layout.tsx`에 메타데이터, OG, GA 스크립트
   - `app/globals.css`에 디자인 토큰 정의

3. **Step 3 — 컴포넌트별 구현**
   - Hero → Features → Screenshots → How it Works → Reviews → Download CTA → FAQ → Footer 순서

4. **Step 4 — SEO 자산**
   - `app/sitemap.ts`, `app/robots.ts`
   - JSON-LD 구조화 데이터 컴포넌트
   - OG 이미지 (`app/opengraph-image.tsx`로 동적 생성 또는 정적 PNG)

5. **Step 5 — 분석 도구 연동**
   - GA4 measurement ID 환경변수 처리
   - 클릭 이벤트 트래킹 함수

6. **Step 6 — 배포**
   - GitHub 저장소 생성 후 Vercel 연결
   - 환경변수 등록 (GA ID 등)
   - 커스텀 도메인 `feeder.siflab.org` 연결
   - DNS CNAME 레코드 설정 안내

7. **Step 7 — 런칭 후**
   - Search Console / Naver 웹마스터 등록
   - 사이트맵 제출
   - Lighthouse 점수 확인 및 개선

---

## 9. 환경변수

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://feeder.siflab.org
NEXT_PUBLIC_APP_STORE_URL=  # 추후 입력
NEXT_PUBLIC_PLAY_STORE_URL= # 추후 입력
```

---

## 10. 미정 / 추후 결정 사항 (Claude Code가 처리 시 주의)

- [ ] **앱의 정확한 기능 디테일** — GitHub README에 상세 설명 부재. Features 섹션 카피는 "재미있는 새친구 만들기" 컨셉으로 일반적 표현 사용 후 실제 기능 확정 시 교체
- [ ] **앱 스크린샷** — 실제 앱 화면 캡처본 필요. 임시로는 디자인 플레이스홀더 또는 Figma 목업 사용
- [ ] **App Store / Play Store URL** — 배포 후 입력
- [ ] **이용약관 / 개인정보처리방침 페이지** — 별도 페이지로 작업 필요 (랜덤채팅 앱 특성상 **개인정보처리방침은 법적 필수**)
- [ ] **siflab.org 브랜드 컬러 / 폰트** — 확인 후 일관성 적용
- [ ] **카카오톡 공유 시 OG 이미지** — Kakao 개발자 콘솔에서 별도 디버깅 권장

---

## 11. 참고: 랜덤채팅 앱 카테고리 SEO 주의사항

랜챗/익명채팅 키워드는 **음란성/유해 콘텐츠 우려가 있는 카테고리**로 분류되어 검색엔진과 앱스토어가 보수적으로 다룹니다. 다음을 권장합니다:

- 랜딩페이지에 **건전한 사용 환경, 신고/차단 시스템, 청소년 보호** 메시지를 명시적으로 노출
- "안전한", "건전한", "신뢰할 수 있는" 같은 보조 키워드 활용
- 개인정보처리방침과 이용약관에서 청소년 보호 정책 명시
- Google Play / App Store 심사 가이드라인 사전 확인
- 광고 집행 시 Google Ads는 이 카테고리 광고 정책 제한이 있으므로 Naver 검색광고/Meta 광고가 더 효과적

---

**끝.**
이 기획서를 Claude Code에 그대로 전달하면 단계별로 구현 가능합니다.
