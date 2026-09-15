"use client";

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { MetricGroupData } from '@/types/iot';

interface EngineeringMetricsProps {
  groups: MetricGroupData[];
}

export function EngineeringMetrics({ groups }: EngineeringMetricsProps) {
  const IconComponent = ({ name }: { name: string }) => {
    const Icon = (LucideIcons as any)[name];
    if (!Icon) return <LucideIcons.Activity className="w-5 h-5 text-accent" />;
    return <Icon className="w-5 h-5 text-accent" />;
  };

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-14">
          <h2 className="text-3xl font-light text-white mb-2">Performance &amp; Reliability Metrics</h2>
          <p className="text-gray-400">Measured numbers, not vibes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-black/20 overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
                <IconComponent name={group.icon} />
                <h3 className="text-lg font-medium text-white">{group.title}</h3>
              </div>
              <div className="divide-y divide-white/5">
                {group.rows.map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-6 py-3 text-sm">
                    <span className="text-gray-400">{row.label}</span>
                    <span className="text-white font-mono">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
