'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Categories() {
  return (
    <div className="flex flex-col min-h-screen h-[700px] bg-white">
      <Navbar />
      <main className="flex flex-col w-full h-[600px]">
        <div className='flex text-black w-full h-[110px] text-5xl font-bold justify-center items-center'>
          <h1>FIND YOUR CATEGORY - LOCATE YOUR SET</h1>
        </div>
        <div className='flex w-full h-[490px] align-center justify-center'>
          <Link className='flex-1 bg-red-500' href='/shop?group=Star Wars'>STAR WARS</Link>
          <Link className='flex-1 bg-orange-500' href='/shop?group=Architecture'>ARCHITECTURE</Link>
          <Link className='flex-1 bg-yellow-500' href='/shop?group=Harry Potter'>HARRY POTTER</Link>
          <Link className='flex-1 bg-green-500' href='/shop?group=City'>CITY</Link>
          <Link className='flex-1 bg-blue-500' href='/shop?group=18+'>18+</Link>
          <Link className='flex-1 bg-purple-500' href='/shop?group=Minecraft'>MINECRAFT</Link>
          <Link className='flex-1 bg-pink-500' href='/shop?group=Ninjago'>NINJAGO</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}