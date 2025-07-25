import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import Catalog from '@/components/SetCatalog';

export const metadata = {
  title: 'Upcoming LEGO Sets',
};

export default function Upcoming() {
  return (
    <div className="flex flex-col min-h-screen h-[800px] bg-white">
      <Navbar />
      <main className="flex flex-grow">
        <Filter />
        <Catalog tag='upcoming' />
      </main>
      <Footer />
    </div>
  );
}