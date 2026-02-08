import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

// BACKEND NOTE: Hubungkan ke API/Supabase jika data layanan ingin dinamis dari database.
import servicesData from '@/data/servicesdummy.json';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  features: string[];
}

export function ServicesSection() {
  const services: ServiceItem[] = servicesData;

  return (
    <section id="services" className="bg-white my-[64px] lg:my-[128px] font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-2">
            Layanan Kami
          </TitleGradient>
          <p className="text-[18px] lg:text-[20px] font-medium text-black max-w-3xl mx-auto mt-4">
            Solusi lengkap untuk kebutuhan digital anda
          </p>
        </div>

        {/* Grid System - Responsive: 1 col (mobile/tablet), 2 cols (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 justify-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full bg-white border border-slate-200 rounded-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Service Title */}
              <h3 className="text-[18px] lg:text-[20px] font-bold text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00AAFF] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 lg:mt-16">
          <Link href="/services">
            <Button variant="pill">
              Selengkapnya
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
