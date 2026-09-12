"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { FeatureItem } from '../../../types/iot';

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  const getGridClass = () => {
    switch (columns) {
      case 2: return 'md:grid-cols-2';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      case 3:
      default: return 'md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const IconComponent = ({ name }: { name: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return <LucideIcons.CheckCircle2 className="w-6 h-6 text-accent" />;
    return <Icon className="w-6 h-6 text-accent" />;
  };

  return (
    <div className={`grid gap-6 ${getGridClass()}`}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="group relative p-6 rounded-2xl border border-white/10 bg-black/20 hover:bg-white/5 transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent/30 transition-colors">
            <IconComponent name={item.icon} />
          </div>
          
          <h4 className="text-xl font-medium text-white mb-3">{item.title}</h4>
          
          <div className="prose prose-invert prose-sm text-gray-400">
            <div dangerouslySetInnerHTML={{ __html: item.description.replace(/\n/g, '<br/>') }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
