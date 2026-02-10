"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

const VisionMission = () => {
  const missions = [
    {
      title: "Produk yang Stabil & Scalable",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "UI/UX Berbasis Pengguna",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Proses Transparan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Kolaborasi Jangka Panjang",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col max-w-[477px]">
            <TitleGradient
              as="h2"
              className="text-[32px] pb-2 mb-4"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Visi
              </motion.span>
            </TitleGradient>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[24px] font-semibold text-black leading-snug mb-4"
            >
              Menjadi <span className="text-[#0083FE]">partner digital terpercaya</span> yang membantu bisnis <span className="text-[#155DFC]">bertumbuh</span> Lewat solusi web & produk digital berkualitas.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] font-normal text-[#575757] leading-relaxed"
            >
              Mendukung pertumbuhan bisnis klien melalui teknologi digital yang inovatif dan andil.
            </motion.p>
          </div>

          <div>
            <TitleGradient
              as="h2"
              className="text-[32px] pb-2 mb-4"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Misi
              </motion.span>
            </TitleGradient>

            <div className="flex flex-col gap-4">
              {missions.map((misi, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-[124px]"
                >
                  <div className="flex-shrink-0 text-[#155DFC]">
                    <CheckSquare className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-black mb-1">
                      {misi.title}
                    </h4>
                    <p className="text-[14px] text-[#575757] leading-relaxed line-clamp-2">
                      {misi.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;