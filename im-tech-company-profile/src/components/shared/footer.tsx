'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
    return <FooterImplementation />;
}

function FooterImplementation() {
    const [active, setActive] = useState<string | null>(null);

    const toggle = (key: string) => {
        setActive(prev => prev === key ? null : key);
    };

    return (
        <footer className="bg-[#252525] text-white rounded-t-[30px] lg:rounded-t-[75px] pt-16 lg:pt-20 pb-8 mt-20 relative overflow-hidden font-sans lg:h-[510px] flex flex-col justify-start">
            <div
                className="absolute right-[-40px] bottom-[-20px] select-none pointer-events-none z-0 leading-none lg:hidden"
                style={{
                    fontSize: '400px',
                    fontWeight: '100',
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
                    letterSpacing: '-35px',
                }}
            >
                IM
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full h-full flex flex-col lg:flex-row gap-10 lg:gap-0 mt-8 lg:mt-0">

                <div className="flex flex-col justify-start items-start text-left pt-2 lg:w-[400px] flex-shrink-0 mb-8 lg:mb-0">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-white rounded-xl flex-shrink-0" />
                        <span className="text-3xl font-bold tracking-tight">I'M Tech Solution</span>
                    </div>
                    <p className="text-gray-300 text-xl leading-relaxed max-w-sm mb-10 font-medium">
                        Partner untuk solusi digital dan pengalaman pengguna yang lebih baik
                    </p>
                    <div>
                        <button className="border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 rounded text-lg font-semibold tracking-wide">
                            Get Started
                        </button>
                    </div>
                    <div className="mt-auto hidden lg:block pb-2">
                        <p className="text-sm text-gray-500">
                            Copyright © 2026, I'M Tech Solution, All Right Reserved.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block w-[251px] flex-shrink-0" />

                <div className="flex-1 relative pt-2 lg:pt-0 w-full">

                    <div
                        className="absolute right-[82px] top-[-150px] bottom-0 select-none pointer-events-none z-0 hidden lg:flex items-start justify-end h-[150%]"
                    >
                        <span style={{
                            fontSize: '950px',
                            fontWeight: '100',
                            color: 'transparent',
                            WebkitTextStroke: '2px rgba(152, 152, 152, 0.2)',
                            lineHeight: '0.75',
                            letterSpacing: '-80px',
                            display: 'block',
                            fontFamily: 'Poppins, sans-serif',
                            marginRight: '-20px'
                        }}>
                            IM
                        </span>
                    </div>

                    <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-[69px] lg:gap-y-[20px] w-full">

                        <div className="flex flex-col lg:pl-2 border-b border-white/10 lg:border-none">
                            <button
                                onClick={() => toggle('indeks')}
                                className="w-full flex justify-between items-center py-4 lg:py-0 lg:cursor-default"
                            >
                                <h3 className="text-xl font-bold lg:mb-8 text-white">Indeks</h3>
                                <i className={`ri-arrow-down-s-line text-2xl lg:hidden transition-transform duration-300 ${active === 'indeks' ? 'rotate-180' : ''}`} />
                            </button>

                            <nav className={`flex flex-col gap-4 text-[#B3B3B3] text-base font-medium overflow-hidden transition-all duration-500 lg:max-h-none lg:overflow-visible ${active === 'indeks' ? 'max-h-[500px] mb-6' : 'max-h-0'}`}>
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                            </nav>
                        </div>

                        <div className="flex flex-col border-b border-white/10 lg:border-none">
                            <button
                                onClick={() => toggle('services')}
                                className="w-full flex justify-between items-center py-4 lg:py-0 lg:cursor-default"
                            >
                                <h3 className="text-xl font-bold lg:mb-8 text-white">Services</h3>
                                <i className={`ri-arrow-down-s-line text-2xl lg:hidden transition-transform duration-300 ${active === 'services' ? 'rotate-180' : ''}`} />
                            </button>

                            <nav className={`flex flex-col gap-4 text-[#B3B3B3] text-base font-medium overflow-hidden transition-all duration-500 lg:max-h-none lg:overflow-visible ${active === 'services' ? 'max-h-[500px] mb-6' : 'max-h-0'}`}>
                                <Link href="#" className="hover:text-white transition-colors">Web Development</Link>
                                <Link href="#" className="hover:text-white transition-colors">Mobile App Development</Link>
                                <Link href="#" className="hover:text-white transition-colors">Design UI/UX</Link>
                                <Link href="#" className="hover:text-white transition-colors">Maintenance</Link>
                            </nav>
                        </div>

                        <div className="lg:col-start-1 lg:row-start-2 lg:pl-2 lg:mt-[20px] border-b border-white/10 lg:border-none">
                            <button
                                onClick={() => toggle('social')}
                                className="w-full flex justify-between items-center py-4 lg:py-0 lg:cursor-default"
                            >
                                <h3 className="text-xl font-bold lg:mb-6 text-white">Social</h3>
                                <i className={`ri-arrow-down-s-line text-2xl lg:hidden transition-transform duration-300 ${active === 'social' ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`overflow-hidden transition-all duration-500 lg:max-h-none lg:overflow-visible ${active === 'social' ? 'max-h-[200px] mb-6' : 'max-h-0'}`}>
                                <div className="flex gap-6">
                                    <a href="#" className="text-white hover:text-gray-400 transition-all">
                                        <i className="ri-whatsapp-fill text-2xl" />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-400 transition-all">
                                        <i className="ri-instagram-fill text-2xl" />
                                    </a>
                                    <a href="#" className="text-white hover:text-gray-400 transition-all">
                                        <i className="ri-mail-fill text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-start-3 lg:row-start-1 border-b border-white/10 lg:border-none">
                            <button
                                onClick={() => toggle('contact')}
                                className="w-full flex justify-between items-center py-4 lg:py-0 lg:cursor-default"
                            >
                                <h3 className="text-xl font-bold lg:mb-8 text-white">Contact</h3>
                                <i className={`ri-arrow-down-s-line text-2xl lg:hidden transition-transform duration-300 ${active === 'contact' ? 'rotate-180' : ''}`} />
                            </button>

                            <nav className={`flex flex-col gap-4 text-[#B3B3B3] text-base font-medium overflow-hidden transition-all duration-500 lg:max-h-none lg:overflow-visible ${active === 'contact' ? 'max-h-[500px] mb-6' : 'max-h-0'}`}>
                                <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
                                <a href="#" className="hover:text-white transition-colors">Email</a>
                                <a href="#" className="hover:text-white transition-colors">Telepon</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:hidden text-center border-t border-white/10 pt-8 pb-4">
                    <p className="text-sm text-gray-500">
                        Copyright © 2026, I'M Tech Solution, All Right Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
