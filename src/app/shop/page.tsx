import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import Catalog from '@/components/SetCatalog';
import { LegoSets } from '@/data/legosets';

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen h-[800px] bg-white">
      <Navbar />
      <main className="flex flex-grow">
        <Filter />
        <Catalog tag='placeholder' />
      </main>
      <Footer />
    </div>
  );
}