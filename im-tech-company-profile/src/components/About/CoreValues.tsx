"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

const CoreValues = () => {
  const values = [
    {
      title: "Inovasi",
      desc: "Selalu mencari cara baru dan lebih baik untuk menyelesaikan tantangan",
    },
    {
      title: "Integritas",
      desc: "Berkomitmen pada kejujuran dan transparansi dalam setiap interaksi",
    },
    {
      title: "Keunggulan",
      desc: "Berusaha memberikan kualitas terbaik dalam setiap proyek",
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
className="flex flex-col items-start justify-center text-left p-6 bg-white rounded-[30px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-shadow min-h-[210px]"
            >
              {/* Icon */}
              <div className="mb-4 text-[#00AAFF]">
                <BadgeCheck className="w-10 h-10" strokeWidth={1.5} />
              </div>

              {/* Title - gradient blue with w-fit trick */}

              <TitleGradient
                as="h3"
                className="text-[20px] font-bold mb-2 w-fit leading-tight"
              >
                {val.title}
              </TitleGradient>

              {/* Description - gray */}
              <p className="text-[14px] text-[#575757] leading-relaxed line-clamp-3">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
