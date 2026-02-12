import React from 'react';
import BlogHero from '@/components/Blog/BlogHero';
import { BlogList } from '@/components/Blog/BlogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insight | IM Tech',
  description: 'Baca artikel terbaru kami tentang tren teknologi, tips pengembangan aplikasi, dan inovasi digital.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogList />
    </main>
  );
}
