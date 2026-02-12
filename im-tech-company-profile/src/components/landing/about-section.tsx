'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TitleGradient } from '@/components/shared/title-gradient';
import { useRouter } from 'next/navigation';

export function AboutSection() {
    const router = useRouter();

    return (
        <section id="about" className="bg-[#f9fafb] py-10 lg:py-14 font-sans">
            <div className="container mx-auto px-6 lg:px-12 text-center mb-8">
                <TitleGradient as="h2" className="text-3xl lg:text-[32px] pb-2 mx-auto">
                    Tentang Kami
                </TitleGradient>
                <p className="text-[20px] font-medium text-[#433f3f] mt-2">
                    Mengenal lebih dekat dengan tim dan visi kami
                </p>
            </div>

            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-10">
                    {/* Left Side: Content */}
                    <div className="space-y-4">
                        <h3 className="text-[20px] font-medium text-black">Cerita kami</h3>

                        <div className="text-[16px] text-[#606060] leading-relaxed space-y-4 text-justify lg:max-w-[500px]">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Single Image (No background/border) */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[650px] h-auto">
                            <Image
                                src="/images/about-team.png"
                                alt=""
                                width={650}
                                height={488}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* 3 Value Cards Below (Left Aligned) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-start text-left w-full max-w-[378px] mx-auto">
                        <div className="w-[48px] h-[48px] mb-4">
                            <Image src="/images/Approval.png" alt="Inovasi" width={48} height={48} />
                        </div>
                        <TitleGradient as="h4" className="text-[20px] font-medium mb-2">
                            Inovasi
                        </TitleGradient>
                        <p className="text-[14px] text-[#606060] leading-relaxed">
                            Selalu mencari cara baru dan lebih baik untuk menyelesaikan tantangan
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-start text-left w-full max-w-[378px] mx-auto">
                        <div className="w-[48px] h-[48px] mb-4">
                            <Image src="/images/Approval.png" alt="Integritas" width={48} height={48} />
                        </div>
                        <TitleGradient as="h4" className="text-[20px] font-medium mb-2">
                            Integritas
                        </TitleGradient>
                        <p className="text-[14px] text-[#606060] leading-relaxed">
                            Berkomitmen pada kejujuran dan transparansi dalam setiap interaksi
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-[6px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col items-start text-left w-full max-w-[378px] mx-auto">
                        <div className="w-[48px] h-[48px] mb-4">
                            <Image src="/images/Approval.png" alt="Keunggulan" width={48} height={48} />
                        </div>
                        <TitleGradient as="h4" className="text-[20px] font-medium mb-2">
                            Keunggulan
                        </TitleGradient>
                        <p className="text-[14px] text-[#606060] leading-relaxed">
                            Berusaha memberikan kualitas terbaik dalam setiap proyek
                        </p>
                    </div>
                </div>

                {/* Centered Button */}
                <div className="flex justify-center">
                    <Button
                        onClick={() => router.push('/about')}
                        variant="pill"
                    >
                        Selengkapnya
                    </Button>
                </div>
            </div>
        </section>
    );
}