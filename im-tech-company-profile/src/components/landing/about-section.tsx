'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionDivider } from '@/components/shared/section-divider';

type TabType = 'visi' | 'misi';

export function AboutSection() {
    const [activeTab, setActiveTab] = useState<TabType>('visi');

    return (
        <section id="about" className="bg-white">
            {/* 
        -----------------------------------------------------------------------
        PART 1: Split Layout (Summary)
        -----------------------------------------------------------------------
      */}
            <div className="container mx-auto px-6 lg:px-12 pt-20 pb-0">
                <div className="text-center">
                    <h3 className="bg-gradient-to-r from-[#00AAFF] to-[#1100FF] bg-clip-text text-transparent font-bold text-3xl uppercase tracking-wider mb-3">Solusi Digital</h3>
                    <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                        Lengkap untuk Bisnis Anda
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mt-4">
                        Kami menghadirkan solusi digital melalui pengembangan
                        website dan aplikasi yang cepat stabil dan scalable
                        dengan fokus pada kebutuhan bisnis dan kenyamanan pengguna
                    </p>
                    <Link href="/services">
                        <Button className="mt-8 bg-black text-white hover:bg-gray-800 rounded-sm px-8 py-6">
                            Lihat Semua Services
                        </Button>
                    </Link>
                </div>
            </div>

            <SectionDivider />

            <div className="container mx-auto px-6 lg:px-12 pb-20 pt-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image with Floating Card */}
                    <div className="relative">
                        {/* Main Image - Transparent, no card styling */}
                        <div className="relative z-10">
                            <Image
                                src="/images/team.png"
                                alt="Tim IM Tech"
                                width={600}
                                height={500}
                                className="object-contain"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -left-10 w-32 h-32 bg-[#00AAFF]/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right: Text & Tabs */}
                    <div className="space-y-8">
                        <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00AAFF] to-[#1100FF] bg-clip-text text-transparent pb-2 mb-2">
                            Tentang Kami
                        </h3>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            <span className="font-semibold text-gray-900">Berawal dari passion di dunia teknologi</span>,
                            kami membangun software house ini untuk membantu bisnis berkembang lewat
                            solusi digital yang tepat guna.
                        </p>

                        {/* Tabs as Buttons */}
                        <div className="flex gap-4 mb-6">
                            <button
                                onClick={() => setActiveTab('visi')}
                                className={cn(
                                    "px-8 py-2 rounded-full text-sm font-medium transition-all",
                                    activeTab === 'visi'
                                        ? "bg-black text-white shadow-lg"
                                        : "bg-white text-gray-400 border border-gray-200 hover:border-gray-300"
                                )}
                            >
                                Visi
                            </button>
                            <button
                                onClick={() => setActiveTab('misi')}
                                className={cn(
                                    "px-8 py-2 rounded-full text-sm font-medium transition-all",
                                    activeTab === 'misi'
                                        ? "bg-black text-white shadow-lg"
                                        : "bg-white text-gray-400 border border-gray-200 hover:border-gray-300"
                                )}
                            >
                                Misi
                            </button>
                        </div>

                        <div className="min-h-[160px]">
                            {activeTab === 'visi' ? (
                                <div className="space-y-4 animate-in fade-in duration-300">
                                    <p className="text-gray-600 italic">
                                        "Menjadi partner teknologi terpercaya yang menghubungkan ide bisnis dengan realitas digital."
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700">
                                            <Check className="w-5 h-5 text-[#00AAFF]" />
                                            <span>Inovasi tanpa henti</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700">
                                            <Check className="w-5 h-5 text-[#00AAFF]" />
                                            <span>Kualitas berstandar global</span>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="space-y-4 animate-in fade-in duration-300">
                                    <p className="text-gray-600 italic">
                                        "Memberikan solusi yang tidak hanya canggih secara teknis, tapi juga berdampak pada growth bisnis."
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-gray-700">
                                            <Check className="w-5 h-5 text-[#00AAFF]" />
                                            <span>User-centric design</span>
                                        </li>
                                        <li className="flex items-center gap-2 text-gray-700">
                                            <Check className="w-5 h-5 text-[#00AAFF]" />
                                            <span>Clean Code & Architecture</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <Link href="/about" className="text-[#00AAFF] font-medium flex items-center gap-2 hover:gap-3 transition-all">
                            Selengkapnya <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
