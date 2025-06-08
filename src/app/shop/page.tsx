import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import Catalog from '@/components/SetCatalog';
import { LegoSets } from '@/data/legosets';

export const metadata = {
  title: 'Shop the Catalog',
};

export default function Shop() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        <Filter />
        <Catalog tag='placeholder' />
      </main>
      <Footer />
    </div>
  );
}