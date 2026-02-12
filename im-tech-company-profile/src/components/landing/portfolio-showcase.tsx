'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { TitleGradient } from '@/components/shared/title-gradient';

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
                    <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-2 block mx-auto">
                        Proyek yang Telah Kami Kerjakan
                    </TitleGradient>
                    <p className="text-[20px] font-medium text-black max-w-3xl mx-auto mt-4">
                        Lihat beberapa proyek terbaik yang telah kami selesaikan dengan hasil yang memuaskan
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {portfolio.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className="w-full max-w-[380px] h-[400px] bg-white rounded-[5px] border border-[#E0E0E0] overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[175px] flex-shrink-0">
                                <Link href={`/portofolio/${item.id}`} className="block w-full h-full">
                                    <Image
                                        src={item.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </Link>
                            </div>
                            <div className="flex flex-col flex-1 p-6 relative">
                                <Link href={`/portofolio/${item.id}`} className="block group/link">
                                    <span className="text-[14px] font-medium text-[#0077FF] mb-2 block text-left">
                                        {item.category}
                                    </span>
                                    <h3 className="text-[18px] font-bold text-black mb-3 text-left leading-tight group-hover/link:text-[#0077FF] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] text-gray-600 leading-relaxed text-left line-clamp-3">
                                        {item.description}
                                    </p>
                                </Link>
                                
                                <div className="mt-auto pt-4 flex justify-start">
                                    <a
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black hover:text-[#0077FF] transition-colors"
                                        aria-label="View on GitHub"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" className="w-8 h-8" fill="currentColor">
                                            <path d="M6.766 11.695C4.703 11.437 3.25 9.904 3.25 7.92c0-.806.281-1.677.75-2.258c-.203-.532-.172-1.662.062-2.129c.626-.081 1.469.258 1.969.726c.594-.194 1.219-.291 1.985-.291c.765 0 1.39.097 1.953.274c.484-.451 1.343-.79 1.969-.709c.218.435.25 1.564.046 2.113c.5.613.766 1.436.766 2.274c0 1.984-1.453 3.485-3.547 3.759c.531.355.891 1.129.891 2.016v1.678c0 .484.39.758.859.564C13.781 14.824 16 11.905 16 8.291C16 3.726 12.406 0 7.984 0S0 3.726 0 8.291c0 3.581 2.203 6.55 5.172 7.663A.595.595 0 0 0 6 15.389v-1.291c-.219.097-.5.162-.75.162c-1.031 0-1.641-.581-2.078-1.662c-.172-.435-.36-.693-.719-.742c-.187-.016-.25-.097-.25-.193c0-.194.313-.339.625-.339c.453 0 .844.29 1.25.887c.313.468.641.678 1.031.678c.391 0 .641-.146 1-.516c.266-.275.469-.517.657-.678"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <Link href="/portofolio">
                        <Button variant="pill">
                            Selengkapnya
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
