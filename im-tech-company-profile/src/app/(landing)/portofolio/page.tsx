import React from 'react';
import PortofolioHero from '@/components/portofolio/PortofolioHero';
import PortofolioList from '@/components/portofolio/PortofolioList';
import PortofolioCta from '@/components/portofolio/PortofolioCta';

export const metadata = {
  title: 'Portofolio - IM Tech',
  description: 'Kumpulan proyek terbaik yang telah dikerjakan oleh tim IM Tech.',
};

export default function PortofolioPage() {
  return (
    <main className="min-h-screen">
      <PortofolioHero />
      <PortofolioList />
      <PortofolioCta />
    </main>
  );
}
