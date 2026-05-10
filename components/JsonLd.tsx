import { SITE } from '@/lib/site';
import { faqItems } from '@/lib/faq';

function JsonLdScript({ data, id }: { data: object; id: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function JsonLd() {
  const mobileApp = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Feeder',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'SocialNetworkingApplication',
    description: SITE.description,
    url: SITE.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '100',
    },
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'siflab',
    url: SITE.parentUrl,
    sameAs: [SITE.url],
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript id="ld-mobileapp" data={mobileApp} />
      <JsonLdScript id="ld-organization" data={organization} />
      <JsonLdScript id="ld-faq" data={faqPage} />
    </>
  );
}
