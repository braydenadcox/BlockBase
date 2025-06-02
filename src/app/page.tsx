"use client"
import Navbar from '@/components/navbar';
import HomeCarousel from '@/components/homeCarousel';
import { UpcomingCarousel, PopularCarousel } from '@/components/homeAuxCarousels';

export default function Home() {
  return (
    <main className='h-[2300px] bg-white'>
      <Navbar />
      <HomeCarousel />
      <PopularCarousel />
      <UpcomingCarousel />
    </main>
  )
};