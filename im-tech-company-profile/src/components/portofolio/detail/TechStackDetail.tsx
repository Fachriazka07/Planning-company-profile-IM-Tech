'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface TechStackDetailProps {
  techStack: string[];
}

const getTechIcon = (tech: string): string => {
  const normalized = tech.toLowerCase().replace(/\s+/g, '');
  
  const iconMap: Record<string, string> = {
    'next.js': 'logos:nextjs-icon',
    'nextjs': 'logos:nextjs-icon',
    'react': 'logos:react',
    'reactjs': 'logos:react',
    'typescript': 'logos:typescript-icon',
    'javascript': 'logos:javascript',
    'tailwindcss': 'logos:tailwindcss-icon',
    'tailwind': 'logos:tailwindcss-icon',
    'supabase': 'logos:supabase-icon',
    'postgresql': 'logos:postgresql',
    'postgres': 'logos:postgresql',
    'prisma': 'logos:prisma',
    'framer': 'logos:framer',
    'framermotion': 'logos:framer',
    'shadcn': 'simple-icons:shadcnui',
    'shadcnui': 'simple-icons:shadcnui',
    'stripe': 'logos:stripe',
    'clerk': 'simple-icons:clerk',
    'radix': 'simple-icons:radixui',
    'radixui': 'simple-icons:radixui',
    'figma': 'logos:figma',
    'vercel': 'logos:vercel-icon',
    'node.js': 'logos:nodejs-icon',
    'nodejs': 'logos:nodejs-icon',
    'express': 'logos:express',
    'expressjs': 'logos:express',
    'mongodb': 'logos:mongodb-icon',
    'flutter': 'logos:flutter',
    'dart': 'logos:dart',
    'firebase': 'logos:firebase',
    'android': 'logos:android-icon',
    'ios': 'logos:apple',
    'swift': 'logos:swift',
    'kotlin': 'logos:kotlin-icon',
    'git': 'logos:git-icon',
    'github': 'logos:github-icon',
    'gitlab': 'logos:gitlab',
    'docker': 'logos:docker-icon',
    'kubernetes': 'logos:kubernetes',
    'aws': 'logos:aws',
    'azure': 'logos:microsoft-azure',
    'gcp': 'logos:google-cloud',
    'googlecloud': 'logos:google-cloud',
    'python': 'logos:python',
    'django': 'logos:django-icon',
    'flask': 'logos:flask',
    'fastapi': 'logos:fastapi-icon',
    'vue': 'logos:vue',
    'vuejs': 'logos:vue',
    'angular': 'logos:angular-icon',
    'svelte': 'logos:svelte-icon',
    'laravel': 'logos:laravel',
    'php': 'logos:php',
    'mysql': 'logos:mysql',  
  };

  return iconMap[normalized] || 'lucide:code-2'; 
};

const TechStackDetail = ({ techStack }: TechStackDetailProps) => {
  return (
    <section className="py-16 bg-white border-y border-gray-100 text-black">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold mb-8 text-black">
          Tech Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 bg-[#F9FAFB] p-5 rounded-lg group hover:bg-[#F3F4F6] transition-colors"
            >
              <div className="text-2xl flex-shrink-0">
                 <Icon icon={getTechIcon(tech)} width="28" height="28" />
              </div>
              <span className="font-medium text-gray-900 text-sm md:text-base">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackDetail;
