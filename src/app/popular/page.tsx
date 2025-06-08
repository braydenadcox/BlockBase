import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import Catalog from '@/components/SetCatalog';
import { LegoSets } from '@/data/legosets';

export const metadata = {
  title: 'Popular LEGO Sets',
};

export default function Popular() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        <Filter />
        <Catalog tag='popular' />
      </main>
      <Footer />
    </div>
  );
}