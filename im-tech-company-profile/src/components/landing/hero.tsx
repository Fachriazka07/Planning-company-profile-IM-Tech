'use client';

import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[600px] flex items-center justify-center pt-[60px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/hero-bg.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto text-center text-white px-6">
        <div className="max-w-[823px] mx-auto space-y-6 md:space-y-8 animate-in fade-in zoom-in duration-1000">
          <h1 className="text-3xl md:text-[36px] font-bold leading-tight md:leading-[1.25]">
            Solusi Digital untuk Web dan Mobile App Bisnismu
          </h1>
          <p className="text-lg md:text-[24px] font-medium text-white/90 leading-relaxed md:leading-[1.5]">
            I&apos;M Tech Solution bantu bisnis anda tampil profesional lewat website dan aplikasi
            mobile yang cepat aman dan user friendly dari ide sampai launch
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#155dfc] hover:bg-[#155dfc]/90 text-white font-medium text-[20px] px-10 py-[30px] rounded-[20px] shadow-lg min-w-[222px] h-[61px] border-none"
            >
              Get Started
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-white/30 hover:bg-white/40 text-white font-semibold text-[20px] px-10 py-[30px] rounded-[20px] shadow-lg min-w-[222px] h-[61px] border-none backdrop-blur-sm"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
