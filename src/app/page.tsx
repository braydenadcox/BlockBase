"use client"
import Navbar from '@/components/navbar';
import HomeCarousel from '@/components/homeCarousel';
import { UpcomingCarousel, PopularDiv } from '@/components/homeAuxCarousels';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className='h-[1900px] bg-white'>
      <Navbar />
      <HomeCarousel />
      <PopularDiv />
      <UpcomingCarousel />
      <div className='w-full h-[350px] bg-white'>

      </div>
      <Footer />
    </main>
  )
};