'use client';

import { Button } from '@/components/ui/button';
import { TitleGradient } from '@/components/shared/title-gradient';

export function HighlightServices() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#ffffff] pt-10 pb-20 lg:pt-14 lg:pb-24 font-sans">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-[1139px] mx-auto">
          <TitleGradient as="h2" className="text-3xl lg:text-[32px] pb-2 mx-auto">
            Solusi Digital
          </TitleGradient>
          <h3 className="text-[20px] font-medium text-[#433f3f] mt-4 mb-8">
            Lengkap untuk Bisnis Anda
          </h3>
          <p className="text-[#525252] text-[16px] max-w-[1000px] mx-auto leading-relaxed mb-12">
            Kami menghadirkan solusi digital melalui pengembangan website dan aplikasi yang cepat
            stabil dan scalable dengan fokus pada kebutuhan bisnis dan kenyamanan pengguna
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => scrollToSection('#services')}
              className="bg-black hover:bg-black/90 text-white font-normal text-[20px] px-10 py-[25px] rounded-[19px] min-w-[237px] h-[51px]"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
