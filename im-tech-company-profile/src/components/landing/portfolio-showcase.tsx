'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

// BACKEND NOTE: Gantilah import data dummy ini dengan call API dari Supabase/Backend jika sudah siap.
// Contoh: const { data: portfolioData } = await supabase.from('portfolio').select('*')
import showcaseData from '@/data/showcasedummy.json';

// Type definition untuk portfolio item
interface PortfolioItem {
    id: number;
    category: string;
    title: string;
    description: string;
    imageUrl: string;
    githubUrl: string;
}

export function PortfolioShowcase() {
    // BACKEND NOTE: Jika menggunakan API, gunakan useState dan useEffect untuk fetch data
    // const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);
    // useEffect(() => { fetchPortfolioData(); }, []);

    const portfolio: PortfolioItem[] = showcaseData;

    return (
        <section id="portfolio" className="bg-white py-32 font-sans">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#00AAFF] to-[#1100FF] bg-clip-text text-transparent pb-2">
                        Proyek yang Telah Kami Kerjakan
                    </h2>
                    <p className="text-[20px] font-medium text-black max-w-3xl mx-auto mt-4">
                        Lihat beberapa proyek terbaik yang telah kami selesaikan dengan hasil yang memuaskan
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {portfolio.map((item) => (
                        <div
                            key={item.id}
                            className="w-full max-w-[363px] h-auto min-h-[357px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
                        >
                            <div className="relative w-full h-[175px] overflow-hidden rounded-t-[6px]">
                                <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col flex-1 p-5">
                                <span className="text-[14px] text-[#0077FF] mb-2">{item.category}</span>
                                <h3 className="text-[14px] font-bold text-black mb-2">{item.title}</h3>
                                <p className="text-[12px] text-gray-600 leading-relaxed flex-1">
                                    {item.description}
                                </p>
                                <div className="mt-4 pt-3 border-t border-gray-100">
                                    <a
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00AAFF] transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="text-[12px]">View on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/portfolio">
                        <Button variant="pill">
                            Selengkapnya
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
