"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { QuickStatData } from '@/types/iot';

interface QuickStatsProps {
  stats: QuickStatData[];
}

export function QuickStats({ stats }: QuickStatsProps) {
  const IconComponent = ({ name }: { name: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return <LucideIcons.Sparkles className="w-5 h-5 text-accent" />;
    return <Icon className="w-5 h-5 text-accent" />;
  };

  return (
    <section className="py-16 border-b border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-white/10 bg-black/20 hover:bg-white/5 hover:border-accent/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-3 text-gray-500">
                <IconComponent name={stat.icon} />
              </div>
              <div className="text-2xl md:text-3xl font-light text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
