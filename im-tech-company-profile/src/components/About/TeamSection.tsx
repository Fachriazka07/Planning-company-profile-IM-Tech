"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TitleGradient } from '@/components/shared/title-gradient';

// SUPABASE SCHEMA (PostgreSQL)
/*
  create table public.team_members (
    id uuid not null default gen_random_uuid(),
    created_at timestamp with time zone not null default now(),
    name text not null,
    role text not null,
    image_url text not null,
    linkedin_url text,
    is_active boolean default true,
    constraint team_members_pkey primary key (id)
  );

  -- RLS Policies
  alter table public.team_members enable row level security;
  create policy "Enable read access for all users" on public.team_members for select using (true);
*/

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TeamSection = () => {
  // Placeholder data matching the schema structure
  const team: TeamMember[] = [
    {
      id: '1',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
    {
      id: '2',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
    {
      id: '3',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
    {
      id: '4',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
    {
      id: '5',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
    {
      id: '6',
      name: 'Lorem Ipsum',
      role: 'Lorem Ipsum',
      image: '/images/man.png',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <TitleGradient as="h2" className="text-3xl lg:text-[40px] font-bold mb-6 block mx-auto">
            Tim Kami
          </TitleGradient>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#575757] max-w-3xl mx-auto text-base lg:text-lg leading-relaxed"
          >
            Tim kami terdiri dari individu dengan latar belakang dan keahlian berbeda
            yang bekerja bersama untuk menghadirkan solusi digital berkualitas melalui
            kolaborasi dan komitmen yang kuat
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-[30px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="relative mb-6">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* LinkedIn Logo - Absolute Positioned */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 -right-2 w-16 h-16 transition-transform hover:scale-110 active:scale-95"
                >
                  <Image
                    src="/images/logo/LinkedIn-logo.png"
                    alt="LinkedIn"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </a>
              </div>

              <div className="mt-4 px-2">
                <h3 className="text-[20px] font-bold text-black mb-1 font-poppins">{member.name}</h3>
                <p className="text-[14px] text-[#9CA3AF] font-medium font-poppins">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
