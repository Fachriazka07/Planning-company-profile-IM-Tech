"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  images: string[];
  index: number;
}

const ServiceCard = ({ title, description, features, images, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-[20px] border border-[#969696] p-8 lg:p-12 transition-all duration-300 hover:shadow-2xl flex flex-col lg:flex-row gap-16"
    >
      <div className="flex-[0.45] flex flex-col h-[600px]">
        <div className="mb-10">
           <h3 className="text-[32px] font-medium text-black mb-6 leading-tight pt-2">{title}</h3>
           <p className="text-[16px] font-normal text-gray-600 leading-relaxed text-justify">
             {description}
           </p>
        </div>
        
        <div className="space-y-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="mt-1">
                 <CheckCheck className="w-8 h-8 text-black" strokeWidth={3} />
              </div>
              <span className="text-[20px] text-black font-normal">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-[0.55] w-full h-[600px]">
        <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-2 relative h-[340px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <Image 
                    src={images[0]} 
                    alt={`${title} 1`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="relative h-[244px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <Image 
                    src={images[1]} 
                    alt={`${title} 2`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="relative h-[244px] overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <Image 
                    src={images[2]} 
                    alt={`${title} 3`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceList = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Kami menyediakan layanan pengembangan website yang dirancang sesuai kebutuhan bisnis mulai dari company profile landing page hingga web aplikasi. Setiap website kami bangun dengan struktur yang rapi desain yang responsif serta performa yang optimal di berbagai perangkat Kami juga memperhatikan aspek, keamanan kemudahan pengelolaan dan skalabilitas agar website dapat berkembang seiring pertumbuhan bisnis Dengan proses kerja yang terstruktur dan komunikasi yang transparan kami memastikan hasil akhir tidak hanya menarik secara visual tetapi juga fungsional dan siap digunakan dalam jangka panjang.',
      features: [
          'Desain modern & profesional',
          'Responsif di semua perangkat',
          'SEO Friendly'
      ],
      images: [
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', 
          'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop', 
          'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop'
      ], 
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description:
          'Kami mengembangkan aplikasi mobile Android dan iOS yang dirancang khusus untuk memberikan pengalaman pengguna yang unggul dan performa tinggi. Tim kami ahli dalam membangun solusi native maupun cross-platform yang stabil, aman, dan skalabel sesuai kebutuhan bisnis Anda. Dari tahap konsep hingga peluncuran, kami memastikan setiap detail aplikasi diperhatikan dengan seksama. Dengan antarmuka yang intuitif dan fitur yang inovatif, aplikasi Anda tidak hanya akan menarik pengguna baru tetapi juga meningkatkan loyalitas pelanggan.',
      features: [
          'Native Android development',
          'User-centric interface',
          'Performance optimized'
      ],
      images: [
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2670&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?q=80&w=687&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2670&auto=format&fit=crop'
      ],
    },
    {
      id: 3,
      title: 'Design UI/UX',
      description:
          'Kami merancang desain UI/UX yang berfokus pada estetika visual dan kemudahan penggunaan untuk menciptakan pengalaman digital yang tak terlupakan. Melalui proses riset yang mendalam dan iterasi desain, kami mengubah ide kompleks menjadi antarmuka yang bersih dan intuitif. Setiap elemen desain dibuat dengan tujuan spesifik untuk memandu pengguna mencapai tujuan mereka. Kami memastikan konsistensi brand di seluruh titik kontak digital, meningkatkan kepuasan pengguna, dan mendorong tingkat konversi yang lebih tinggi.',
      features: [
          'Comprehensive process',
          'Conversion-first interface',
          'Cross-device consistency'
      ],
      images: [
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=880&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1632&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1565&auto=format&fit=crop'
      ],
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description:
          'Layanan maintenance dan support kami memastikan website dan aplikasi Anda selalu beroperasi pada performa puncak, aman, dan up-to-date. Kami menawarkan pemantauan proaktif, perbaikan bug cepat, dan pembaruan keamanan rutin untuk melindungi aset digital Anda. Selain itu, kami menyediakan optimasi rutin untuk menjaga kecepatan dan stabilitas seiring bertambahnya trafik. Dengan tim support yang responsif, Anda dapat fokus pada inti bisnis sementara kami menangani semua aspek teknis.',
      features: [
          'Priority support',
          'Performance monitoring',
          'Security patching'
      ],
      images: [
        'https://images.unsplash.com/photo-1599499464008-2d7575295f8d?q=80&w=1470&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1470&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1586244346400-7ec57cda0c8b?q=80&w=880&auto=format&fit=crop'
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 container mx-auto bg-white">
      <div className="flex flex-col gap-32">
        {services.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
