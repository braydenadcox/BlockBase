"use client"
import Navbar from '@/components/navbar';
import HomeCarousel from '@/components/homeCarousel';

export default function Home() {
  return (
    <main className='h-[1500px] bg-white'>
      <Navbar />
      <HomeCarousel />
    </main>
  )
};