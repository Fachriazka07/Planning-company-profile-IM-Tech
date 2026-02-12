'use client';

import React, { useState } from 'react';
import { BlogFilter } from './BlogFilter';
import { BlogMainCard } from './BlogMainCard';
import { LatestPostItem } from './LatestPostItem';
import insightData from '@/data/insightdummy.json';

const CATEGORIES = ["Semua", "Teknologi", "AI", "Design"];

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredPosts = activeCategory === "Semua" 
    ? insightData 
    : insightData.filter(post => post.category === activeCategory);

  // For sidebar, maybe just show latest 3-4 posts regardless of filter, or filtered?
  // Usually sidebar shows latest globally.
  const latestPosts = insightData.slice(0, 4); 

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Category Filter */}
        <BlogFilter 
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content - Left */}
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((item) => (
                        <BlogMainCard key={item.id} post={item as any} />
                    ))}
                </div>
            </div>

            {/* Sidebar - Right */}
            <div className="lg:col-span-1">
                <div className="sticky top-24">
                    <h3 className="text-xl font-bold text-black mb-6">Latest Post</h3>
                    <div className="flex flex-col gap-2">
                        {latestPosts.map((item) => (
                            <LatestPostItem key={item.id} post={item as any} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
