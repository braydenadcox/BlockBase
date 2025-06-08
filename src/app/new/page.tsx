import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import { LegoSets } from '@/data/legosets';

export default function New() {
  return (
    <div className="flex flex-col min-h-screen h-[2000px] bg-white">
      <Navbar />
      <main className="flex flex-grow">
        <Filter />
        <div className='flex flex-grow bg-blue-500'>
        </div>
      </main>
      <Footer />
    </div>
  );
}