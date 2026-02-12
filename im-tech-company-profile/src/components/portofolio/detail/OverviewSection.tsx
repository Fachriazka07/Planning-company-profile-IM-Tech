'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface OverviewSectionProps {
  overview: string;
  problem: string[];
  solution: string[];
}

const OverviewSection = ({ overview, problem, solution }: OverviewSectionProps) => {
  // Split overview text into bullet points for visual matching if it's a long paragraph
  const overviewPoints = overview.split('. ').filter(item => item.trim().length > 0);

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Overview
          </h2>
          <ul className="space-y-3">
             {overviewPoints.map((point, index) => (
                <li key={index} className="flex gap-3 text-gray-700 text-lg leading-relaxed items-start">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-[11px] flex-shrink-0" />
                  <span>{point.endsWith('.') ? point : `${point}.`}</span>
                </li>
             ))}
          </ul>
        </div>

        {/* Problem & Solution */}
        <div>
           <h2 className="text-2xl font-bold mb-8 text-black">
            Problem & Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Problem */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#F3F4F6] p-10"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Problem
              </h3>
              <ul className="space-y-4">
                {problem.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-black font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F3F4F6] p-10"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Solution
              </h3>
              <ul className="space-y-4">
                {solution.map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700">
                    <span className="text-black font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
