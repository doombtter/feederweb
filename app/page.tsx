import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Screenshots } from '@/components/Screenshots';
import { HowItWorks } from '@/components/HowItWorks';
import { Reviews } from '@/components/Reviews';
import { DownloadCTA } from '@/components/DownloadCTA';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { SearchBar } from '@/components/SearchBar';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Reviews />
        <DownloadCTA />
        <FAQ />
      </main>
      <Footer />
      <SearchBar />
    </>
  );
}
