"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Code, Wifi } from 'lucide-react';

import { ProjectOverviewCardData } from '@/types/iot';

interface ProjectOverviewCardsProps {
  overview: ProjectOverviewCardData[];
}

export function ProjectOverviewCards({ overview }: ProjectOverviewCardsProps) {
  return (
    <section className="py-20 bg-black/40 border-b border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full shadow-[0_0_8px_var(--accent)] bg-accent" />
          <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">Project Overview</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {overview.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-black/20 hover:bg-white/5 transition-all group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 opacity-50"
                style={{ backgroundColor: card.color }}
              />
              
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-gray-300">
                  {card.task}
                </span>
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Complete
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-4 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Code className="w-4 h-4" />
                  <span>{card.tech || card.technology}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{card.duration || card.complexity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
