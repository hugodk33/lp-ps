import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import Simulation from '@/components/Simulation';
import Institutional from '@/components/Institutional';
import Categories from '@/components/Categories';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <Simulation />
        <Institutional />
        <Categories />
        <Partners />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
