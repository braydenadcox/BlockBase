import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';

export default function Categories() {
  return (
    <div className="flex flex-col min-h-screen h-[700px] bg-white">
      <Navbar />
      <main className="flex flex-col w-full h-[600px]">
        <div className='flex text-black w-full h-[110px] text-5xl font-bold justify-center items-center'>
          <h1>FIND YOUR CATEGORY - LOCATE YOUR SET</h1>
        </div>
        <div className='flex w-full h-[490px]'>
          <div className='flex-1 bg-red-500'>STAR WARS</div>
          <div className='flex-1 bg-orange-500'>ARCHITECTURE</div>
          <div className='flex-1 bg-yellow-500'>HARRY POTTER</div>
          <div className='flex-1 bg-green-500'>CITY</div>
          <div className='flex-1 bg-blue-500'>18+</div>
          <div className='flex-1 bg-purple-500'>MINECRAFT</div>
          <div className='flex-1 bg-pink-500'>NINJAGO</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}