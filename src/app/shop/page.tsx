'use client';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Filter from '@/components/filter';
import ShopCatalog from '@/components/shopCatalog';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Shop() {

  const searchParams = useSearchParams();
  const groupFromURL = searchParams.get('group') || '';
  const [selectedGroup, setSelectedGroup] = useState<string>(groupFromURL);

  return (
    <div className="flex flex-col h-screen bg-white">
      <Navbar />
      <main className="flex flex-grow overflow-hidden">
        <Filter onSelect={(groupName: string) => setSelectedGroup(groupName)} />
        <ShopCatalog group={selectedGroup} />
      </main>
      <Footer />
    </div>
  );
}